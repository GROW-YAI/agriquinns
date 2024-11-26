import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <div className="flex flex-wrap justify-center mb-4">
          <div className="w-full md:w-1/2 xl:w-1/3 mb-4 md:mb-6 lg:mb-8 xl:mb-10">
            <p className="text-lg leading-relaxed mb-2">&copy; 2024 Agriquinns. All rights reserved.</p>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 mb-4 md:mb-6 lg:mb-8 xl:mb-10">
            <ul className="list-none mb-2">
              <li className="mb-2">
                <a href="#" className="text-lg leading-relaxed hover:text-green-700">Terms and Conditions</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-lg leading-relaxed hover:text-green-700">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-lg leading-relaxed hover:text-green-700">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 mb-4 md:mb-6 lg:mb-8 xl:mb-10">
            <h3 className="text-2xl font-bold leading-tight mb-2">Follow Us</h3>
            <ul className="list-none mb-2 flex justify-start">
              <li className="mr-4">
                <a href="#" className="text-lg leading-relaxed hover:text-green-700">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="text-lg leading-relaxed hover:text-green-700">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="text-lg leading-relaxed hover:text-green-700">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="text-lg leading-relaxed hover:text-green-700">
                  <i className="fas fa-envelope"></i>
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="text-lg leading-relaxed hover:text-green-700">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="text-lg leading-relaxed hover:text-green-700">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
