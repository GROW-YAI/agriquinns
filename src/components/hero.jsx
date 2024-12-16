import React from 'react';
import heroImage from '../assets/images/6hero.jpg';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat bg-fixed text-center"
      style={{ backgroundImage: `url(${heroImage})` }}
      aria-label="Hero background image"
    >
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24 text-white flex justify-center items-center h-full">
        <div className="text-center">
          <h1 className="text-7xl font-bold leading-tight mb-4">
            Welcome to Agriquinns
          </h1>
          <p className="text-3xl leading-relaxed mb-8 text-bold">
            Imparting Lives Through Agriculture
          </p>
          <Link
            to="/about"
            className="bg-green-700 hover:bg-green-800 hover:text-black text-white font-bold py-2 px-4 rounded mt-4"
            aria-label="Learn more about Agriquinns"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

