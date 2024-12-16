
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
import GridLayout from 'react-grid-layout';

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

const ResponsiveGrid = () => {
  const layout = [
    { i: 'item1', x: 0, y: 0, w: 4, h: 2 },
    { i: 'item2', x: 4, y: 0, w: 4, h: 2 },
    { i: 'item3', x: 0, y: 2, w: 4, h: 2 },
    { i: 'item4', x: 4, y: 2, w: 4, h: 2 },
  ];

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      width={1200}
    >
      <div key="item1">Item 1</div>
      <div key="item2">Item 2</div>
      <div key="item3">Item 3</div>
      <div key="item4">Item 4</div>
    </GridLayout>
  );
};


export default App;

