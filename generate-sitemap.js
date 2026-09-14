
import fs from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

// 1. Apne saare subjects ki data files yahan import kar lein
import { javaData } from './src/data/javaData.js';
import { pythonData } from './src/data/pythonData.js'; 
import { javascriptData } from './src/data/javascriptData.js';         
import { htmlData } from './src/data/htmlData.js';     
import { cssData } from './src/data/cssData.js';       

async function generateSitemap() {
  // Static pages ki list
  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'yearly', priority: 0.5 },
    { url: '/privacy-policy', changefreq: 'yearly', priority: 0.3 },
    { url: '/terms-conditions', changefreq: 'yearly', priority: 0.3 },
    { url: '/disclaimer', changefreq: 'yearly', priority: 0.3 },
  ];

  // 2. Sabhi subjects ka data ek array mein rakh lein
  const allSubjects = [
    javaData,
    pythonData, 
    javascriptData, 
    htmlData, 
    cssData
  ];

  // 3. Loop chala kar sabhi subjects ke saare topics ke URLs automatic sitemap mein add karna
  allSubjects.forEach((subject) => {
    if (subject && subject.topics) {
      subject.topics.forEach((topic) => {
        links.push({
          url: `/course/${subject.subjectCode}/${topic.id}`,
          changefreq: 'weekly',
          priority: 0.7,
        });
      });
    }
  });

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: 'https://www.w3coder.in' });

  // Return a promise that resolves with your XML string
  const data = await streamToPromise(Readable.from(links).pipe(stream));

  // Save it directly to the public folder so it gets bundled
  fs.writeFileSync('./public/sitemap.xml', data.toString());
  
  console.log('Sitemap generated automatically for all subjects in public/sitemap.xml!');
}

generateSitemap();