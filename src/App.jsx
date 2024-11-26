import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Products from './components/product';
import Testimonials from './components/testimonials';
import Footer from './components/footer';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;