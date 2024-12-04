import React from 'react';
import logo from '../assets/images/logo.jpg';

const Header = () => {
  return (
    <header>
      <nav class="fixed top-0 left-0 w-full z-10 flex justify-between py-4 px-10 bg-gray-200 text-green-700">
        {/* <a href="#" class=" hover:text-black font-extrabold text-4xl font-serif">AGRIQUINNS</a> */}
        {<img src={logo} alt="Agriquinns Logo"  class="w-20 h-16 mr-4  "></img>
     }

        <ul class="align-middle flex space-x-8 p-4 text-lg">
        <li><a href="#" class="hover:text-black font-bold">About Us</a></li>
    

          <li>
            <a href="#" class="hover:text-black font-bold">Products</a>
          </li>
          <li>
            <a href="#" class="hover:text-black font-bold">Testimonials</a>
          </li>
          <li>
            <a href="#" class="hover:text-black font-bold">Blog</a>
          </li>
          <li>
            <a href="#" class="hover:text-black font-bold">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;