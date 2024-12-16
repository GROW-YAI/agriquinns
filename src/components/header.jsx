import React from 'react';
import logo from '../assets/images/logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="fixed top-0 left-0 w-full z-10 flex justify-between py-4 px-4 bg-gray-200 text-green-700 md:px-10">
        <img src={logo} alt="Agriquinns Logo" className="w-24 h-10 mr-4 md:w-36 md:h-16"></img>
        <ul className="align-middle flex space-x-4 p-4 text-lg md:space-x-8 md:text-xl">
          <li>
            <Link to="/" className="hover:text-black font-bold"> Home </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-black font-bold"> About Us </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-black font-bold"> Products </Link>
          </li>
          <li>
            <Link to="/testimonials" className="hover:text-black font-bold"> Testimonials </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-black font-bold"> Blog </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-black font-bold"> Contact Us </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
