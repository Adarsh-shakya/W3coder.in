import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism, vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Terminal, Play } from "lucide-react"; 
import "../Styles/Notes.css";

const TopicViewer = ({ topicData }) => {
  // ==========================================
  // STATE MANAGEMENT FOR PLAYGROUND
  // ==========================================
  const [activeTab, setActiveTab] = useState(0);
  const [terminalOutput, setTerminalOutput] = useState('Click "Run Code" to see the output...');
  const [isTyping, setIsTyping] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  // Safety Check: Agar data load nahi hua
  if (!topicData) {
    return <div className="note-container error-msg">Loading topic data...</div>;
  }

  // ==========================================
  // PLAYGROUND LOGIC (Run Button Click)
  // ==========================================
  const runCode = () => {
    if (isTyping || !topicData.playground) return;
    
    const targetText = topicData.playground[activeTab].output;
    setTerminalOutput('');
    setIsTyping(true);
    setHasRun(true);
    setShowCursor(true);
    
    let i = 0;
    const typeWriter = () => {
      if (i < targetText.length) {
        setTerminalOutput(targetText.substring(0, i + 1));
        i++;
        setTimeout(typeWriter, 20); // Typing speed
      } else {
        setIsTyping(false);
        setTimeout(() => setShowCursor(false), 1500);
      }
    };
    typeWriter();
  };

  // Tab change karne par output reset karna
  const handleTabChange = (index) => {
    setActiveTab(index);
    setTerminalOutput('Click "Run Code" to see the output...');
    setHasRun(false);
    setIsTyping(false);
    setShowCursor(false);
  };

  return (
    <>
      {/* SEO HELMET */}
      <Helmet>
        <title>{topicData.title} - W3Coder Tutorial</title>
        <meta
          name="description"
          content={
            topicData.intro
              ? topicData.intro.substring(0, 160)
              : topicData.title
          }
        />
      </Helmet>

      {/* ========================================== */}
      {/* MAIN TOPIC CONTENT                         */}
      {/* ========================================== */}
      <div className="note-container">
        
        {/* 1. Main Topic Title & Intro */}
        <h1 className="note-title">{topicData.title}</h1>
        {topicData.intro && <p className="note-text">{topicData.intro}</p>}

        {/* 2. Original Data Mapping (Looping over sections) */}
        {topicData.sections &&
          topicData.sections.map((section, index) => (
            <div key={index} className="note-section">
              <h2 className="note-heading">{section.heading}</h2>

              {section.content.map((item, i) => {
                
                // TYPE: NORMAL TEXT
                if (item.type === "text") {
                  return (
                    <p
                      key={i}
                      className={item.className || "note-text"}
                      dangerouslySetInnerHTML={{ __html: item.value }}
                    />
                  );
                }

                // TYPE: NORMAL LIST
                if (item.type === "list") {
                  return (
                    <ul key={i} className="note-text" style={{ paddingLeft: "1.5rem", listStyleType: "disc" }}>
                      {item.items.map((li, k) => (
                        <li key={k}>{li}</li>
                      ))}
                    </ul>
                  );
                }

                // TYPE: HTML LIST (strong, span etc.)
                if (item.type === "list-html") {
                  return (
                    <ul key={i} className="note-text" style={{ paddingLeft: "1.5rem", listStyleType: "disc", lineHeight: "1.8" }}>
                      {item.items.map((li, k) => (
                        <li key={k} dangerouslySetInnerHTML={{ __html: li }} />
                      ))}
                    </ul>
                  );
                }

                // TYPE: CODE BLOCK (Light Theme for Reading)
                if (item.type === "code") {
                  return (
                    <SyntaxHighlighter
                      key={i}
                      language={topicData.subjectCode || "javascript"}
                      style={prism}
                      customStyle={{
                        borderRadius: "8px",
                        padding: "1rem",
                        fontSize: "14px",
                      }}
                    >
                      {item.value}
                    </SyntaxHighlighter>
                  );
                }

                // TYPE: CONTENT BLOCK (Box layout for flow control)
                if (item.type === "block") {
                  return (
                    <div key={i} className="content-block">
                      {item.subheading && <h3 className="note-subheading">{item.subheading}</h3>}
                      {item.text && <p className="note-text">{item.text}</p>}
                      {item.code && (
                        <pre className="note-code" style={{ backgroundColor: "#ECEFF4", padding: "1rem", borderLeft: "4px solid #3b82f6", overflowX: "auto", borderRadius: "4px" }}>
                          {item.code}
                        </pre>
                      )}
                      {item.exampleTitle && <p className="note-example-title">{item.exampleTitle}</p>}
                      {item.exampleCode && (
                        <pre className="note-code" style={{ backgroundColor: "#ECEFF4", padding: "1rem", borderLeft: "4px solid #3b82f6", overflowX: "auto", borderRadius: "4px" }}>
                          {item.exampleCode}
                        </pre>
                      )}
                    </div>
                  );
                }
                // TYPE: IMAGE
if (item.type === "image") {
  return (
    <img 
      key={i} 
      src={item.url} 
      alt={item.alt || "Tutorial Image"} 
      className={item.className || "responsive-image"} 
    />
  );
}

if (item.type === "output") {
    return (
      <div 
        key={index} 
        className="output-preview-box"
        style={{
          border: "1px dashed #94a3b8",
          padding: "16px",
          borderRadius: "8px",
          backgroundColor: "#f8fafc",
          margin: "12px 0"
        }}
        dangerouslySetInnerHTML={{ __html: item.value }}
      />
    );
  }

                // TYPE: TABLE (NEW - For Python Strings Cheat Sheet)
              // TYPE: TABLE (SIMPLE GRID FORMAT)
                if (item.type === "table") {
                  return (
                    <div key={i} className="note-table-container">
                      <table className="note-table">
                        <thead>
                          <tr>
                            {item.headers.map((head, idx) => (
                              <th key={idx}>{head}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {item.rows.map((row, rowIdx) => (
                            <tr key={rowIdx}>
                              {row.map((cell, cellIdx) => (
                                /* Sirf simple text, koi extra design ya color nahi */
                                <td key={cellIdx}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          ))}

        {/* ========================================== */}
        {/* 3. NEW INTERACTIVE PLAYGROUND SECTION        */}
        {/* ========================================== */}
        {topicData.playground && topicData.playground.length > 0 && (
          <div className="playground-container">
            <div className="playground-header">
              <h3>Interactive Code Playground</h3>
              <p>Run and test code examples live.</p>
            </div>

            {/* Playground Tabs */}
            <div className="playground-tabs">
              {topicData.playground.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => handleTabChange(index)}
                  className={`playground-tab ${activeTab === index ? 'active' : ''}`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Editor Area (Dark Theme) */}
            <div className="playground-code-area">
              <button 
                onClick={runCode}
                disabled={isTyping}
                className="playground-run-btn"
              >
                <Play />
                <span>Run</span>
              </button>
              
              <div style={{ paddingTop: "1.5rem" }}>
                <SyntaxHighlighter
                   language={topicData.subjectCode || "python"}
                   style={vscDarkPlus}
                   customStyle={{ margin: 0, borderRadius: "6px", fontSize: "14px", background: "#1e293b" }}
                >
                   {topicData.playground[activeTab].code}
                </SyntaxHighlighter>
              </div>
            </div>

            {/* Terminal Output Area */}
            <div className="playground-output">
              <div className="playground-output-header">
                <Terminal /> Terminal Output
              </div>
              <div className={`playground-output-text ${hasRun ? 'has-run' : ''}`}>
                {terminalOutput}
                {showCursor && <span className="blinking-cursor">█</span>}
              </div>
            </div>
          </div>
        )}

        <hr style={{ margin: "2rem 0", borderTop: "1px solid #e5e7eb" }} />

        {/* ========================================== */}
        {/* 4. CONCLUSION                              */}
        {/* ========================================== */}
        {topicData.conclusion && (
          <div className="content-block" style={{ marginTop: "2rem", backgroundColor: "#eff6ff", border: "1px solid #bfdbfe" }}>
            <h2 className="note-heading" style={{ marginTop: 0 }}>
              Conclusion
            </h2>
            <p className="note-text">{topicData.conclusion}</p>
          </div>
        )}

      </div>
    </>
  );
};

export default TopicViewer;