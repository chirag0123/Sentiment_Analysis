import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="left">
        <div className="brand">Brand</div>
        <ul className="menu">
          <li><Link to="/" >Home</Link></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      {isMobile ? (
        <>
          <div className="burger" onClick={toggleMenu}>
            <div className={isOpen ? 'line line1 active' : 'line line1'}></div>
            <div className={isOpen ? 'line line2 active' : 'line line2'}></div>
            <div className={isOpen ? 'line line3 active' : 'line line3'}></div>
          </div>
          <ul className={isOpen ? 'menu-mobile active' : 'menu-mobile'}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><button className="btn">Login</button></li>
            <li><button className="btn">Signup</button></li>
          </ul>
        </>
      ) : (
        <div className="right">
          <Link to="/login" className='btn'>Login</Link>
          <Link to="/Signup" className='btn'>Signup</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
