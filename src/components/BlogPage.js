import React, { useState } from 'react';
import styles from './BlogPage.module.css';
import { useLocation } from 'react-router-dom';

const BlogPage = () => {
  const location = useLocation();
  const [showAll, setShowAll] = useState(false);

  const handleLoadMore = () => {
    setShowAll(true);
  };

  const blogItems = [
    {
      id: 1,
      imageSrc: 'path/to/blog-image-1.jpg',
      imageAlt: 'Blog Image 1',
      title: 'Blog Title 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales libero in lectus gravida, vitae facilisis lacus iaculis.',
      link: '#'
    },
    {
      id: 2,
      imageSrc: 'path/to/blog-image-2.jpg',
      imageAlt: 'Blog Image 2',
      title: 'Blog Title 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales libero in lectus gravida, vitae facilisis lacus iaculis.',
      link: '#'
    },
    {
      id: 3,
      imageSrc: 'path/to/blog-image-3.jpg',
      imageAlt: 'Blog Image 3',
      title: 'Blog Title 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales libero in lectus gravida, vitae facilisis lacus iaculis.',
      link: '#'
    },
    {
      id: 4,
      imageSrc: 'path/to/blog-image-4.jpg',
      imageAlt: 'Blog Image 4',
      title: 'Blog Title 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales libero in lectus gravida, vitae facilisis lacus iaculis.',
      link: '#'
    },
    // Add more blog items here
  ];

  const visibleBlogItems = showAll ? blogItems : blogItems.slice(0, 2);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog</h1>
      <div className={styles.blogList}>
        {visibleBlogItems.map((blogItem) => (
          <div className={styles.blogItem} key={blogItem.id}>
            <img src={blogItem.imageSrc} alt={blogItem.imageAlt} className={styles.blogImage} />
            <h2 className={styles.blogTitle}>{blogItem.title}</h2>
            <p className={styles.blogDescription}>{blogItem.description}</p>
            <a href={blogItem.link} className={styles.readMoreLink}>Read More</a>
          </div>
        ))}
        {!showAll && (
          <button className={styles.loadMoreButton} onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
