import React, { useState } from "react";
import "./Styles/App.css";


import MainContent from "./Components/MainContent.jsx";
import Rightbar from "./Components/Rightbar.jsx";
import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";
import Sidebar from "./Components/Sidebar.jsx"

const App = () => {
  const [selectedSubject, setSelectedSubject]= useState("Java");
  const [selectedSubtopic, setSelectedSubtopic] = useState("");

  return (
    <div className="app-container">
      <Navbar setSelectedSubject={setSelectedSubject}/>

      <div className="content">
        <Sidebar 
        selectedSubject={selectedSubject}
        setSelectedSubtopic={setSelectedSubtopic}
        />

        <MainContent
          subject={selectedSubject}
          subtopic={selectedSubtopic}
        />

        <Rightbar />
      </div>

      <Footer />
    </div>
  );
};

export default App;
