import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../Styles/Navbar.css';

const Navbar = () => { 

  // ★ UPDATE: Links ab '/course/subject' format me hain
  const navLinks = [
    { name: 'Java', path: '/course/java' },        // Old: /java
    { name: 'Python', path: '/course/python' },    // Old: /python/fundamentals
    { name: 'HTML', path: '/course/html' },        // Old: /html/intro
    { name: 'CSS', path: '/course/css' },          
    { name: 'JavaScript', path: '/course/javascript' }
  ];
  
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <div className="navbar-logo">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1> <span style={{color:"#f39c12",fontStyle:"italic"}}>W3</span>coder</h1>
            
          </Link>
        </div>

        <button className="navbar-toggle" onClick={toggleMenu}>
          &#9776;
        </button>  

        <ul className={`navbar-menu ${menuActive ? 'active' : ''}`}>
          {navLinks.map((item) => (
            <li key={item.name} onClick={() => setMenuActive(false)}> 
              <Link to={item.path}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;