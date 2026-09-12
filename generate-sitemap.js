const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

async function generateSitemap() {
  // List all your React routes here
  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'yearly', priority: 0.5 },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: 'https://www.w3coder.in' });

  // Return a promise that resolves with your XML string
  const data = await streamToPromise(Readable.from(links).pipe(stream));

  // Save it directly to the public folder so it gets bundled
  fs.writeFileSync('./public/sitemap.xml', data.toString());
  
  console.log('Sitemap generated successfully in public/sitemap.xml!');
}

generateSitemap();