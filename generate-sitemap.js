import fs from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

async function generateSitemap() {
  // Yahan aap apne saare fixed/static routes daal dein jo App.jsx mein hain
  const staticLinks = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'yearly', priority: 0.5 },
    { url: '/privacy-policy', changefreq: 'yearly', priority: 0.3 },
    { url: '/terms-conditions', changefreq: 'yearly', priority: 0.3 },
    { url: '/disclaimer', changefreq: 'yearly', priority: 0.3 },
  ];

  // Agar aapke paas dynamic courses ya subjects hain, unhe aap yahan loop karke add kar sakte hain.
  // Filhaal ke liye ye saare static aur main pages ko sitemap me daal dega.

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: 'https://www.w3coder.in' });

  // Return a promise that resolves with your XML string
  const data = await streamToPromise(Readable.from(staticLinks).pipe(stream));

  // Save it directly to the public folder so it gets bundled
  fs.writeFileSync('./public/sitemap.xml', data.toString());
  
  console.log('Sitemap generated successfully with all routes in public/sitemap.xml!');
}

generateSitemap();
