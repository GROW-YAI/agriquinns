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
        <Route path="/home" element={<Hero />} />
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