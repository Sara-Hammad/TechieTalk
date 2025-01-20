import React, { useState } from 'react';
import Modal from '../Modal/Modal'; 
import './BlogPostCard.css';

const BlogPostCard = ({ title, summary, id, fullText }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true); 
  const closeModal = () => setIsModalOpen(false); 

  return (
    <div className="blog-post-card">
      <h3>{title}</h3>
      <p>{summary}</p>
      <button className="read-more" onClick={openModal}>Read More</button>

      <Modal show={isModalOpen} onClose={closeModal} content={{ title, fullText }} />
    </div>
  );
};

export default BlogPostCard;
