import React from 'react';
import logo from '../assets/images/Agriquinns-logo1.jpg';

const Header = () => {
  return (
    <header>
      <nav class=" flex justify-between py-4 px-10 w-full left-0 top-0 absolute  bg-green-700 text-white">
        <a href="#" class=" hover:text-black font-extrabold text-3xl font-sans">AGRIQUINNS</a>
        {/* <img src={logo} alt="Agriquinns Logo"  class="w-12 h-12 mr-4  "></img>
     */}

        <ul class="align-middle flex space-x-4">
        <li><a href="#" class="hover:text-black font-bold">About Us</a></li>
    

          <li>
            <a href="#" class="hover:text-black font-bold">Products</a>
          </li>
          <li>
            <a href="#" class="hover:text-black font-bold">Testimonials</a>
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