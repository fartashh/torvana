import fs from 'fs';
import path from 'path';

const serverBundlePath = path.resolve(process.cwd(), '.server/entry-server.js');
const templatePath = path.resolve(process.cwd(), 'dist/index.html');

async function prerender() {
  const { render } = await import(serverBundlePath);
  const template = fs.readFileSync(templatePath, 'utf-8');
  
  const topics = [
    'garbage',
    'potholes',
    'wildlife',
    'property',
    'tree',
    'water',
    'snow'
  ];

  const routesToPrerender = [
    '/',
    '/311',
    '/divisions',
    '/contact',
    ...topics.map(t => `/${t}`),
    ...topics.map(t => `/311/kb/${t}`)
  ];

  for (const url of routesToPrerender) {
    const appHtml = render(url);
    const html = template.replace('<!--app-html-->', appHtml);

    let filePath = `dist${url === '/' ? '/index.html' : `${url}/index.html`}`;
    const fullPath = path.resolve(process.cwd(), filePath);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(fullPath, html);
    console.log(`Pre-rendered: ${filePath}`);
  }
}

prerender().catch(err => {
  console.error("Error during prerender:", err);
  process.exit(1);
});
