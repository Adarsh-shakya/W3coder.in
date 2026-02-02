import React from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // SEO ke liye

// Components
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";

// Pages
import Home from "./Pages/Home.jsx";        // Landing Page
import CoursePage from "./Pages/CoursePage.jsx"; // Main Study Page (Jisme Sidebar hoga)

import PrivacyPolicy from "./Components/PrivacyPolicy.jsx";

import "./Styles/App.css"; // Global Styles

const App = () => {
  return (
    <HelmetProvider>
      <div className="app-container">
        {/* 1. Navbar Hamesha Top par rahega */}
        <Navbar />
        
        {/* 2. Main Content Area */}
        {/* Note: Humne Sidebar yahan se hata diya hai kyuki wo ab CoursePage ke andar hai */}
        <div className="main-content-wrapper">
          <Routes>
            
            {/* Route 1: Home Page (Jab website khulegi) */}
            <Route path="/" element={<Home />} />

            {/* Route 2: Dynamic Course Page 
                :subject = java/python/html
                :topic?  = intro/syntax (Question mark ? ka matlab hai ye optional hai)
            */}
            <Route path="/course/:subject/:topic?" element={<CoursePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            {/* Route 3: 404 Page (Agar koi galat link dale) */}
            <Route path="*" element={<div style={{padding:'50px'}}>Page Not Found</div>} />

          </Routes>
        </div>

        {/* 3. Footer Hamesha Bottom par rahega */}
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;