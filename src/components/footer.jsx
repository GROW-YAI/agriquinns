
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <div className="flex flex-wrap justify-center mb-4">
          <div className="w-full md:w-1/2 xl:w-1/3 mb-4 md:mb-6 lg:mb-8 xl:mb-10">
            <p className="text-lg leading-relaxed mb-2">Agriquinns, Imparting lives through Agriculture.</p>
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
                <a href="https://www.facebook.com/profile.php?id=61556224264505&mibextid=sCpJLy" target="_blank" className="text-lg leading-relaxed hover:text-green-700 text-blue-600">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              {/* <li className="mr-4">
                <a href="#" className="text-lg leading-relaxed hover:text-green-700 text-red-600">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li> */}
              <li className="mr-4">
                <a href="https://www.instagram.com/agriquinns_?igsh=MTllcTI5YTZjZTJ5Yg%3D%3D&utm_source=qr" target="_blank" className="text-lg leading-relaxed hover:text-green-700 text-pink-600">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li className="mr-4">
                <a href="https://www.linkedin.com/company/agriquinns-ghana/" target="_blank" className="text-lg leading-relaxed hover:text-green-700 text-blue-400">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                  
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="text-lg leading-relaxed hover:text-green-700 text-green-600">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </li>
              <li className="mr-4">
                <a href="mailto:agriquinns@gmail.com" target="_blank" className="text-lg leading-relaxed hover:text-green-700 text-red-500">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-t-2 border-green-700 my-4" />
        <p className="text-center text-lg leading-relaxed mb-2 text-green-700">&copy; 2024 Agriquinns. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

