import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        Abdur 
      </Link>

      <div className={`${styles.menuIcon} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>

      {isOpen && (
        <ul className={styles.menu}>
          
            <Link to="/" className={styles.navLink} onClick={toggleMenu}>
              Home
            </Link>
         
         
            <Link to="/blog" className={styles.navLink} onClick={toggleMenu}>
              Blog
            </Link>
       
       
            <Link to="/education" className={styles.navLink} onClick={toggleMenu}>
              Education
            </Link>
   
   
            <Link to="/award" className={styles.navLink} onClick={toggleMenu}>
              Awards
            </Link>
    
            <Link to="/job" className={styles.navLink} onClick={toggleMenu}>
              JobExperience
            </Link>
   
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
