import React from "react";
import { useParams, Navigate } from "react-router-dom";

// Components
import TopicViewer from "../Components/TopicViewer";
import Sidebar from "../Components/Sidebar";
import Rightbar from "../Components/Rightbar";

// Data
import { javaData } from "../data/javaData";
import { pythonData } from "../data/pythonData";
import { htmlData } from "../data/htmlData";
import { javascriptData } from "../data/javascriptData";
import { cssData } from "../data/cssData";

import "../Styles/CoursePage.css";

const dataMap = {
  java: javaData,
  python: pythonData,
  html: htmlData,
  javascript: javascriptData,
  css: cssData,
};

const CoursePage = ({ isSidebarOpen, setSidebarOpen }) => {
  const { subject, topic } = useParams();

  const currentSubjectData = dataMap[subject];
  if (!currentSubjectData) {
    return <div className="error-msg">Subject Not Found (404)</div>;
  }

  if (!topic) {
    const firstTopicId = currentSubjectData.topics[0].id;
    return <Navigate to={`/course/${subject}/${firstTopicId}`} replace />;
  }

  const currentTopicData = currentSubjectData.topics.find(
    (t) => t.id === topic,
  );
  if (!currentTopicData) {
    return <div className="error-msg">Topic Not Found inside {subject}</div>;
  }

  return (
    <div className="course-page-container">
      {/* --- LEFT COLUMN: SIDEBAR --- */}
      {isSidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)} />
      )}

      <aside className="layout-sidebar">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setSidebarOpen(false)}
          subjectData={currentSubjectData}
          activeTopicId={topic}
        />
      </aside>

      {/* --- MIDDLE COLUMN: MAIN CONTENT --- */}
      <main className="layout-content" onClick={() => setSidebarOpen(false)}>
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
