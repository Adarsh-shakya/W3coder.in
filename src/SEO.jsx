import React from 'react';
import { Helmet } from 'react-helmet-async';

// 1. Yahan 'path' add kiya
export default function SEO({ title, description, name, type = 'website', path = '' }) {
  const siteUrl = "https://w3coder.in";
  
  // Safe URL formatting (agar path me aage '/' na ho toh add karega)
  const cleanPath = path && !path.startsWith('/') ? `/${path}` : path;
  const canonicalUrl = `${siteUrl}${cleanPath}`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {/* End of standard metadata tags */}

      {/* Facebook tags */}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* End of Facebook tags */}

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* End of Twitter tags */}
    </Helmet>
  );
}