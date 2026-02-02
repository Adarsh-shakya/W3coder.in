import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

// Components
import TopicViewer from '../Components/TopicViewer'; // Path check kar lena
import Sidebar from '../Components/Sidebar';
import Rightbar from '../Components/Rightbar'; // Rightbar import kiya

// Data
import { javaData } from '../data/javaData'; 
import { pythonData } from '../data/pythonData'; 
import { htmlData } from '../data/htmlData';
import { javascriptData } from '../data/javascriptData';
import { cssData } from '../data/cssData';


// CSS File (Niche diya hai code iska)
import '../Styles/CoursePage.css'; 

const dataMap = {
  java: javaData,
  python: pythonData, 
  html: htmlData,
  javascript: javascriptData,
  css :cssData,
};

const CoursePage = () => {
  const { subject, topic } = useParams();
  
  // 1. Subject Validation
  const currentSubjectData = dataMap[subject];
  if (!currentSubjectData) {
    return <div className="error-msg">Subject Not Found (404)</div>;
  }

  // 2. Auto-Redirect Logic (Agar topic URL me nahi hai)
  if (!topic) {
    const firstTopicId = currentSubjectData.topics[0].id;
    return <Navigate to={`/course/${subject}/${firstTopicId}`} replace />;
  }

  // 3. Topic Data Fetching
  const currentTopicData = currentSubjectData.topics.find(t => t.id === topic);
  if (!currentTopicData) {
    return <div className="error-msg">Topic Not Found inside {subject}</div>;
  }

  return (
    <div className="course-page-container">
      
      {/* --- LEFT COLUMN: SIDEBAR --- */}
      <aside className="layout-sidebar">
        <Sidebar 
          subjectData={currentSubjectData} 
          activeTopicId={topic} 
        />
      </aside>

      {/* --- MIDDLE COLUMN: MAIN CONTENT --- */}
      <main className="layout-content">
        <TopicViewer topicData={currentTopicData} />
      </main>

      {/* --- RIGHT COLUMN: ADS / EXTRAS --- */}
      <aside className="layout-rightbar">
        <Rightbar />
      </aside>

    </div>
  );
};

export default CoursePage;