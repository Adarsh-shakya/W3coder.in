import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = ({ onToggleMenu }) => {
  const navLinks = [
    { name: "Java", path: "/course/java" },
    { name: "Python", path: "/course/python" },
    { name: "HTML", path: "/course/html" },
    { name: "CSS", path: "/course/css" },
    { name: "JavaScript", path: "/course/javascript" },
  ];

  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation();

  const isCoursePage = location.pathname.startsWith("/course");

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <h1>
              {" "}
              <span style={{ color: "#f39c12", fontStyle: "italic" }}>W3</span>
              coder
            </h1>
          </Link>
        </div>

        <ul className={`navbar-menu ${menuActive ? "active" : ""}`}>
          {isCoursePage && (
            <li className="navbar-toggle" onClick={onToggleMenu }>
              &#9776;
            </li>
          )}

          {navLinks.map((item) => {
            const isActive =
              location.pathname === item.path ||
              location.pathname.startsWith(item.path + "/");

            return (
              <li
                key={item.name}
                className={isActive ? "active" : ""}
                onClick={() => {
                  setMenuActive(false);
                  onToggleMenu(false);
                }}
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
