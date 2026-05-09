import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Building, Phone } from 'lucide-react';
import Header from '../components/Header';

// Use Vite's import.meta.glob to statically import all markdown files as raw text
const t311Modules = import.meta.glob('../knowledgebases/311/*.md', { as: 'raw' });

export default function TopicPage311() {
  const { topicId } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMarkdown() {
      setLoading(true);
      const t311Path = `../knowledgebases/311/${topicId}.md`;

      try {
        let text = 'Content not found.';
        if (t311Modules[t311Path]) {
          text = await t311Modules[t311Path]();
        }
        setContent(text);
      } catch (e) {
        console.error('Error fetching markdown', e);
      } finally {
        setLoading(false);
      }
    }

    fetchMarkdown();
  }, [topicId]);

  return (
    <>
      <Header />
      <main className="topic-page container">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} /> Back to Services
        </Link>
        
        {loading ? (
          <p>Loading information...</p>
        ) : (
          <div className="kb-panel panel-311 glass" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 className="panel-title" style={{ margin: 0 }}>
                <Phone size={24} /> 311 Services
              </h2>
              <Link to={`/${topicId}`} className="back-link" style={{ margin: 0, color: 'var(--success-color)' }}>
                <Building size={20} /> View Division Info
              </Link>
            </div>
            <div className="markdown-body">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          </div>
        )}
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} City of Torvana. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
