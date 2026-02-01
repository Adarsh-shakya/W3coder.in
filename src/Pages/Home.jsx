import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import heroImg from "../assets/images/Img_home.png";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">

      {/* SEO */}
      <Helmet>
        <title>W3Coder - Learn Java, Python, HTML, CSS & JS Free</title>
        <meta
          name="description"
          content="Free coding tutorials for beginners. Learn Java, Python, Web Development and more at W3Coder."
        />
      </Helmet>

      {/* HERO IMAGE */}
      <div className="hero-image">
         <img
        src={heroImg}
        alt="Welcome to w3coder.in"
      />
      </div>
      

      {/* HERO TEXT */}
      <h1 className="hero-title">Learn to Code for Free</h1>
      <p className="hero-subtitle">
        Interactive tutorials for beginners to advanced learners.
      </p>

      {/* COURSES */}
      <div className="course-grid">
        <SubjectCard title="Java" link="/course/java" color="#EA2D2E" />
        <SubjectCard title="Python" link="/course/python" color="#3776AB" />
        <SubjectCard title="HTML" link="/course/html" color="#E34F26" />
        <SubjectCard title="CSS" link="/course/css" color="#1572B6" />
        <SubjectCard
          title="JavaScript"
          link="/course/javascript"
          color="#F7DF1E"
          textColor="#000"
        />
      </div>
    </div>
  );
};

const SubjectCard = ({ title, link, color, textColor = "#fff" }) => {
  return (
    <Link to={link} className="card-link">
      <div
        className="subject-card"
        style={{ backgroundColor: color, color: textColor }}
      >
        {title}
      </div>
    </Link>
  );
};

export default Home;
