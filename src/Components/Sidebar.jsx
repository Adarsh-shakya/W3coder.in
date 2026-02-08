// import React, { useEffect, useRef } from "react";
// import { Link, useParams } from "react-router-dom";
// import "../Styles/sidebar.css";

// // --- Subject Subtopic Data ---
// // This object defines the navigation links for each main subject.
// const subtopics = {
//   Java: [
//     "Java Basics",
//     "Java Flow Control",
//     "Java Methods",
//     "Java Arrays",
//     "Java Strings",
//     "Java OOPs Concepts",
//     "Java Interfaces",
//     "Java Collections",
//     "Java Exception Handling",
//     "Java Multithreading",
//     "Java File Handling",
//     "Java Streams and Lambda Expressions",
//     "Java IO",
//     "Java Synchronization",
//     "Java Regex",
//     "Java Networking",
//     "JDBC",
//     "Java Memory Allocation",
//     "Java Interview Questions",
//     "Java Practice Problems",
//     "Java Projects",
//   ],
//   Python: [
//     "Python Fundamentals",
//     "Python Functions",
//     "Python Data Structures",
//     "Python OOPs Concepts",
//     "Python Exception Handling",
//     "File Handling in Python",
//     "Python Database Handling",
//     "Python Packages or Libraries",
//     "Data Science with Python",
//     "Web Development with Python",
//   ],
//   HTML: [
//     "HTML Introduction",
//     "HTML Editors",
//     "HTML Basics",
//     "HTML Comments",
//     "HTML Elements",
//     "HTML Attributes",
//     "HTML Headings",
//     "HTML Paragraphs",
//     "HTML Text Formatting",
//     "HTML Quotations",
//     "HTML Colors",
//     "HTML Links Hyperlinks",
//     "HTML Images",
//     "HTML Favicon",
//     "HTML Tables",
//     "HTML List",
//     "HTML Block and Inline Elements",
//     "HTML Iframes",
//     "HTML File Paths",
//     "HTML Layout",
//     "HTML Computer Code Elements",
//     "HTML5 Semantics",
//     "HTML Entities",
//     "HTML Symbols",
//     "HTML Emojis",
//     "HTML Charsets",
//     "HTML URL Encoding",
//     "HTML Forms",
//     "HTML Responsive Web Design",
//     "HTML Video",
//     "HTML Examples",
//     "HTML Graphics",
//   ],
//   CSS: [
//     "CSS Introduction",
//     "CSS Syntax",
//     "CSS Selectors",
//     "CSS Comments",
//     "CSS Colors",
//     "CSS Borders",
//     "CSS Margins",
//     "CSS Height and Width",
//     "CSS Outline",
//     "CSS Fonts",
//     "CSS Icons",
//     "CSS Links",
//     "CSS Lists",
//     "CSS Tables",
//     "CSS Display Property",
//     "CSS max-width Property",
//     "CSS z-index Property",
//     "CSS Overflow",
//     "CSS Float",
//     "CSS Align",
//     "CSS Combinators",
//     "CSS Pseudo-classes",
//     "CSS Pseudo Elements",
//     "CSS Opacity / Transparency",
//     "CSS DropDowns",
//     "CSS Image Gallery",
//     "CSS Image Sprites",
//     "CSS Attribute Selector",
//     "CSS Counters",
//     "CSS Website Layout",
//     "CSS Units",
//     "CSS Specificity",
//     "How to apply !important in CSS?",
//     "CSS Text Formatting",
//     "CSS Backgrounds",
//     "CSS Box model",
//     "CSS Positioning Elements",
//     "CSS flexbox",
//     "CSS Grid Layout",
//     "Responsive Web Design",
//     "CSS Transitions",
//     "CSS Animations",
//   ],
//   JavaScript: [
//     "JavaScript Basics",
//     "JS Variables & Datatypes",
//     "JS Operators",
//     "JS Statements",
//     "JS Loops",
//     "JS Perfomance & Debugging",
//     "JS Object",
//     "JS Function",
//     "JS Array",
//     "JS String",
//     "JS Numbers",
//     "JS Math",
//     "JS Map",
//     "JS Set",
//     "JS Objects",
//     "JS Advance",
//     "JavaScript Exercises",
//   ],
// };

// // --- Sidebar Component ---

// const Sidebar = ({ selectedSubject, setSelectedSubtopic }) => {
//   return (
//     <div className="sidebar">
//       <h3 className="sidebar-title">{ selectedSubject }</h3>
//       <ul className="sidebar-links">
//       <li><Link to="/java/basics">Java Basics</Link></li>
//         <li><Link to="/java/flow-control">Flow Control</Link></li>
//         <li><Link to="/java/methods">Java Methods</Link></li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;


// src/data/sidebarData.js

import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Sidebar.css"; 


const Sidebar = ({ subjectData, activeTopicId }) => {
  
  // Agar data load nahi hua (Safety Check)
  if (!subjectData) {
    return <div className="sidebar">Select a subject</div>;
  }

  return (
    <div className="sidebar">
      {/* 1. Subject Title (e.g., JAVA PROGRAMMING) */}
      <h3 className="sidebar-title">
        {subjectData.subjectTitle.toUpperCase()}
      </h3>

      <ul className="sidebar-links">
        {/* 2. Topics ka Loop (Java Basics, Flow Control etc.) */}
        {subjectData.topics.map((topic, index) => (
          <li key={index} className="sidebar-li">
            
           
            <Link 
              to={`/course/${subjectData.subjectCode}/${topic.id}`} 
              className={topic.id === activeTopicId ? "active" : ""}
            >
              {topic.title}
            </Link>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
