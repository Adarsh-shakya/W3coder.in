import React from 'react';
import { Helmet } from 'react-helmet-async'; // SEO ke liye
// CSS file import karna na bhulein, jisme apki purani styles thin
import '../Styles/Notes.css'; 

const TopicViewer = ({ topicData }) => {
  
  // Safety Check: Agar data load nahi hua ya galat hai
  if (!topicData) {
    return <div className="note-container error-msg">Loading topic data...</div>;
  }

  return (
    <>
      {/* ================= SEO SECTION ================= */}
      {/* Yeh browser ke tab ka naam aur Google description change karega */}
      <Helmet>
        <title>{topicData.title} - W3Coder Tutorial</title>
        <meta name="description" content={topicData.intro ? topicData.intro.substring(0, 160) : topicData.title} />
      </Helmet>

      {/* ================= MAIN CONTENT CONTAINER ================= */}
      <div className="note-container">
        
        {/* 1. Main Topic Title (e.g., Java Basics) */}
        <h1 className="note-title">{topicData.title}</h1>

        {/* 2. Introduction Paragraph */}
        {topicData.intro && (
           <p className="note-text">{topicData.intro}</p>
        )}

        {/* 3. Dynamic Sections Loop (e.g., 1. Java Features, 2. Syntax...) */}
        {topicData.sections && topicData.sections.map((section, index) => (
          <div key={index} className="note-section">
            
            {/* Section Heading */}
            <h2 className="note-heading">{section.heading}</h2>

            {/* --- CONTENT LOOP INSIDE SECTION --- */}
            {/* Yahan hum check karenge ki content kis type ka hai */}
            {section.content.map((item, i) => {
              
              // === CASE A: SIMPLE TEXT PARAGRAPH ===
              if (item.type === 'text') {
                return (
                  <p key={i} className={item.className || "note-text"}>
                    {item.value}
                  </p>
                );
              }

              // === CASE B: SIMPLE LIST (<ul><li>) ===
              if (item.type === 'list') {
                return (
                  <ul key={i} className="note-text">
                    {item.items.map((li, k) => <li key={k}>{li}</li>)}
                  </ul>
                );
              }

              // === CASE C: HTML LIST (Jisme <strong> tags use ho rahe hon) ===
              if (item.type === 'list-html') {
                return (
                  <ul key={i} className="note-text">
                    {item.items.map((li, k) => (
                      // dangerouslySetInnerHTML use kar rahe hain taki <strong> tag kaam kare
                      <li key={k} dangerouslySetInnerHTML={{ __html: li }} />
                    ))}
                  </ul>
                );
              }

              // === CASE D: SIMPLE CODE BLOCK (<pre>) ===
              if (item.type === 'code') {
                return (
                  <pre key={i} className="note-code">
                    {item.value}
                  </pre>
                );
              }

              // === CASE E: COMPLEX CONTENT BLOCK (Box wala style - Like Flow Control) ===
              if (item.type === 'block') {
                return (
                  <div key={i} className="content-block">
                    {/* Subheading (e.g., 1.1 if Statement) */}
                    {item.subheading && <h3 className="note-subheading">{item.subheading}</h3>}
                    
                    {/* Text description */}
                    {item.text && <p className="note-text">{item.text}</p>}
                    
                    {/* Main Code Syntax */}
                    {item.code && (
                      <pre className="note-code">{item.code}</pre>
                    )}

                    {/* "Example:" Title */}
                    {item.exampleTitle && (
                      <p className="note-example-title">{item.exampleTitle}</p>
                    )}

                    {/* Example Code block */}
                    {item.exampleCode && (
                      <pre className="note-code">{item.exampleCode}</pre>
                    )}
                  </div>
                );
              }

              return null; // Agar type match nahi hua to kuch mat dikhao
            })}
          </div>
        ))}

        <hr />

        {/* 4. CONCLUSION (Optional) */}
        {topicData.conclusion && (
          <div className="content-block" style={{marginTop: '2rem'}}>
            <h2 className="note-heading" style={{marginTop:0}}>Conclusion</h2>
            <p className="note-text">{topicData.conclusion}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default TopicViewer;
