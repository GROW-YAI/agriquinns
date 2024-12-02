import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Products from './components/product';
import Testimonials from './components/testimonials';
import Footer from './components/footer';
import OurTeam from './components/ourteam';
import Blog from './components/blog';
import ContactUs from './components/contactus';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Products />
      <Testimonials />
      <OurTeam />
      <Blog/>
      <ContactUs/>
      <Footer />
    </div>
  );
};

export default App;