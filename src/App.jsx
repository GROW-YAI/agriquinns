// import React from 'react';
// import Header from './components/header';
// import Hero from './components/hero';
// import Products from './components/product';
// import Testimonials from './components/testimonials';
// import Footer from './components/footer';
// import OurTeam from './components/ourteam';
// import Blog from './components/blog';
// import ContactUs from './components/contactus';

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Hero />
//       <Products />
//       <Testimonials />
//       <OurTeam />
//       <Blog/>
//       <ContactUs/>
//       <Footer />
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './components/hero';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/ourteam';
import Products from './components/Product';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/ContactUs';

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