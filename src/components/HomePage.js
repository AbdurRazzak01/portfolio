import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.containerStyles}>
     
      <h1 className={styles.titleStyles}>Md Abdur Razzak</h1>
      <h2 className={styles.subtitleStyles}>Systems Analyst</h2>
      <Link to="/portfolio" className={styles.ctaButtonStyles}>View Portfolio</Link>
      <Link to="/blog" className={styles.ctaButtonStyles}>Visit Blog</Link>
    </div>
  );
};

export default HomePage;
