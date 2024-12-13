
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './components/hero';
import Header from './components/header';
import Footer from './components/footer';
import About from './components/ourteam';
import Products from './components/product';
import Testimonials from './components/testimonials';
import Blog from './components/blog';
import Contact from './components/contactus';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;