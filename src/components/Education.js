import React, { useEffect, useRef } from 'react';
import styles from './Education.module.css';
import { useLocation } from 'react-router-dom';

const EducationPage = () => {
  const location = useLocation();
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.classList.add('transition-enter');

      setTimeout(() => {
        container.classList.remove('transition-enter');
      }, 0);

      return () => {
        container.classList.remove('transition-enter');
      };
    }
  }, [location]);

  return (
    <div className={`${styles.container} transition-enter-active`} ref={containerRef}>
      <h1 className={styles.title}>Education</h1>
      <div className={styles.educationList}>
        <div className={styles.educationItem}>
          <img src="path/to/education-image-1.jpg" alt="Education Image 1" className={styles.educationImage} />
          <h2 className={styles.educationTitle}>Education Title 1</h2>
          <p className={styles.educationDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales libero in lectus gravida,
            vitae facilisis lacus iaculis.
          </p>
          <a href="#" className={styles.learnMoreLink}>Learn More</a>
        </div>
        <div className={styles.educationItem}>
          <img src="path/to/education-image-2.jpg" alt="Education Image 2" className={styles.educationImage} />
          <h2 className={styles.educationTitle}>Education Title 2</h2>
          <p className={styles.educationDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales libero in lectus gravida,
            vitae facilisis lacus iaculis.
          </p>
          <a href="#" className={styles.learnMoreLink}>Learn More</a>
        </div>
        {/* Add more education items as needed */}
      </div>
    </div>
  );
};

export default EducationPage;
