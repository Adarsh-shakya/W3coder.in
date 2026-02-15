import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Components
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";

// Pages
import Home from "./Pages/Home.jsx";
import CoursePage from "./Pages/CoursePage.jsx";

import PrivacyPolicy from "./Components/PrivacyPolicy.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import TermsAndConditions from "./Components/TermsAndConditions.jsx";
import Disclaimer from "./Components/Disclaimer.jsx";

import "./Styles/App.css";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <HelmetProvider>
      <div className="app-container">
        <Navbar onToggleMenu={toggleSidebar} closeSidebar={closeSidebar} />

        <div className="main-content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms-conditions" element={<TermsAndConditions />} />
            <Route path="/disclaimer" element={<Disclaimer />} />

            <Route
              path="/course/:subject/:topic?"
              element={
                <CoursePage
                  isSidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                />
              }
            />

            <Route
              path="*"
              element={<div style={{ padding: "50px" }}>Page Not Found</div>}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;
