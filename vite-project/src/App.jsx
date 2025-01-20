import React from 'react';
import Header from './assets/components/Header/Header';
import HeroSection from './assets/components/HeroSection/HeroSection';
import BlogPostGrid from './assets/components/BlogPostGrid/BlogPostGrid';
import Footer from './assets/components/Footer/Footer';
import './index.css';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <BlogPostGrid />
      <Footer />
    </div>
  );
};

export default App;
