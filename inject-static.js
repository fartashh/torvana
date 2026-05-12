import { readFileSync, writeFileSync } from 'fs';
const html = readFileSync('dist/index.html', 'utf-8');
const content = `<nav>
  <a href="/torvana/">Torvana</a>
  <a href="/torvana/311">311 Online</a>
  <a href="/torvana/divisions">Divisions</a>
  <a href="/torvana/contact">Contact</a>
</nav>
<main>
  <h1>How can we help you today?</h1>
  <p>Access municipal services and report issues in the City of Torvana.</p>
  <ul>
    <li>Garbage &amp; Solid Waste Issues</li>
    <li>Potholes &amp; Road Maintenance</li>
    <li>Wildlife Requests</li>
    <li>Property Standards &amp; Noise</li>
    <li>Tree Maintenance</li>
    <li>Water, Sewer &amp; Drainage</li>
    <li>Snow &amp; Sidewalk Complaints</li>
  </ul>
</main>`;
writeFileSync('dist/index.html', html.replace('<!--app-html-->', content));
console.log('✅ Static HTML injected');
