import React from 'react';
import styles from './Award.module.css';

const AwardsPage = () => {
  const awards = [
    {
      image: require('../me.jpeg'),
      title: 'Award Title 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales libero in lectus gravida, vitae facilisis lacus iaculis.',
    },
    {
      image: require('../me.jpeg').default,
      title: 'Award Title 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales libero in lectus gravida, vitae facilisis lacus iaculis.',
    },
    {
      image: require('../me.jpeg').default,
      title: 'Award Title 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales libero in lectus gravida, vitae facilisis lacus iaculis.',
    },
    {
      image: require('../me.jpeg').default,
      title: 'Award Title 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales libero in lectus gravida, vitae facilisis lacus iaculis.',
    },
    // Add more awards as needed
  ];



  

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Awards</h1>
      <div className={styles.awardsList}>
        {awards.map((award, index) => (
          <div key={index} className={styles.awardItem}>
            <div className={styles.awardImageContainer}>
              <div className={styles.awardOverlay}>
                <h2 className={styles.awardTitle}>{award.title}</h2>
                <p className={styles.awardDescription}>{award.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsPage;
