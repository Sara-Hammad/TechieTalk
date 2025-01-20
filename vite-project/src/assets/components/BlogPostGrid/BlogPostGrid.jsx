import React from 'react';
import BlogPostCard from '../BlogPostCard/BlogPostCard';
import './BlogPostGrid.css';

const BlogPostGrid = () => {
  const posts = [
    {
      id: 1,
      title: 'Tech News 1',
      summary: 'A quick look at the latest updates in the tech world.',
      fullText: 'In today’s rapidly evolving tech landscape, one thing is certain: change is constant. From groundbreaking gadgets to the latest software innovations, we’re diving into the most exciting updates in the tech world. Stay tuned for what’s next!'
    },
    {
      id: 2,
      title: 'Tech News 2',
      summary: 'Exploring the hottest trends and innovations today',
      fullText: 'Technology is transforming our lives at a pace never seen before. From AI advancements to cutting-edge mobile devices, we’re exploring the trends shaping the future. Let’s take a closer look at the innovations leading the way.'
    },
    {
      id: 3,
      title: 'Tech News 3',
      summary: 'Your go-to source for fresh insights and tech stories.',
      fullText: 'The digital world never sleeps, and neither do we. This post dives into the stories that matter most in tech today, offering fresh insights, analysis, and predictions. Whether you’re a casual reader or a tech enthusiast, there’s something for everyone.'
    }
  ];

  return (
    <div className="blog-post-grid">
      {posts.map((post) => (
        <BlogPostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default BlogPostGrid;
