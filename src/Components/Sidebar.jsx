import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Sidebar.css";

const Sidebar = ({ subjectData, activeTopicId, isOpen, onClose }) => {
  console.log("Sidebar ko status mila:", isOpen);
  if (!subjectData) {
    return <div className="sidebar">Select a subject</div>;
  }

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <h3 className="sidebar-title">
        {subjectData.subjectTitle.toUpperCase()}
      </h3>

      <ul className="sidebar-links">
        {subjectData.topics.map((topic, index) => {
          const isActive = String(topic.id) === String(activeTopicId);

          return (
            <li
              key={index}
              className={`sidebar-li ${isActive ? "active" : ""}`}
            >
              <Link
                to={`/course/${subjectData.subjectCode}/${topic.id}`}
                className="sidebar-link-item"
                onClick={onClose}
              >
                {topic.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
