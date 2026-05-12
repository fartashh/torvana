import { readFileSync, writeFileSync } from 'fs';

const staticHTML = `
<nav>
  <a href="/torvana/">Torvana</a>
  <a href="/torvana/311">311 Online</a>
  <a href="/torvana/divisions">Divisions</a>
  <a href="/torvana/contact">Contact</a>
</nav>
<main>
  <h1>How can we help you today?</h1>
  <p>Access municipal services, report issues, and find information about the City of Torvana.</p>
  <h2>Popular Services</h2>
  <ul>
    <li><a href="/torvana/311/kb/garbage">Garbage &amp; Solid Waste Issues</a></li>
    <li><a href="/torvana/311/kb/potholes">Potholes &amp; Road Maintenance</a></li>
    <li><a href="/torvana/311/kb/wildlife">Wildlife Requests</a></li>
    <li><a href="/torvana/311/kb/property">Property Standards &amp; Noise</a></li>
    <li><a href="/torvana/311/kb/trees">Tree Maintenance</a></li>
    <li><a href="/torvana/311/kb/water">Water, Sewer &amp; Drainage</a></li>
    <li><a href="/torvana/311/kb/snow">Snow &amp; Sidewalk Complaints</a></li>
  </ul>
</main>`;

let html = readFileSync('dist/index.html', 'utf-8');
html = html.replace('<!--app-html-->', staticHTML);
writeFileSync('dist/index.html', html);
console.log('✅ Static content injected into dist/index.html');
