import React from 'react';
import johnDoe from '../assets/images/johndoe.jpg';
import janeSmith from '../assets/images/janedoe.jpg';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 bg-gray-100">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <h2 className="text-5xl font-bold leading-tight text-gray-800 mb-4">What Our Customers Say</h2>
        <div className="flex flex-wrap justify-center mb-4">
          <div className="testimonial bg-white p-4 md:p-6 lg:p-8 xl:p-10 w-full md:w-1/2 xl:w-1/2 mb-4 md:mb-6 lg:mb-8 xl:mb-10 shadow-2xl rounded-3xl">
            <div className="flex items-center mb-4">
              <img src={johnDoe} alt="John Doe" className="w-16 h-16 rounded-full mr-4 border-2 border-gray-300" />
              <div>
                <h3 className="text-2xl font-bold text-gray-600">John Doe</h3>
                <p className="text-lg text-gray-500">Farmer</p>
              </div>
            </div>
            <p className="text-lg leading-relaxed mb-2 text-gray-600">"Agriquinns' fertilizers have improved the yield of my crops significantly. I'm impressed with the results!"</p>
            <div className="flex justify-end">
              <svg xmlns="(link unavailable)" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 1h-6m6 3v5m-3.882 4H12v2h9L12 17.017v1.883L16.118 21H30v-3.882L22.12 15H18L3.882 9H4l7-7 7 7z" />
              </svg>
            </div>
          </div>
          <div className="testimonial bg-white p-4 md:p-6 lg:p-8 xl:p-10 w-full md:w-1/2 xl:w-1/2 mb-4 md:mb-6 lg:mb-8 xl:mb-10 shadow-2xl rounded-3xl">
            <div className="flex items-center mb-4">
              <img src={janeSmith} alt="Jane Smith" className="w-16 h-16 rounded-full mr-4 border-2 border-gray-300" />
              <div>
                <h3 className="text-2xl font-bold text-gray-600">Jane Smith</h3>
                <p className="text-lg text-gray-500">Gardener</p>
              </div>
            </div>
            <p className="text-lg leading-relaxed mb-2 text-gray-600">"I was impressed by the quality of Agriquinns' fertilizers. They're eco-friendly and effective!"</p>
            <div className="flex justify-end">
              <svg xmlns="(link unavailable)" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 1h-6m6 3v5m-3.882 4H12v2h9L12 17.017v1.883L16.118 21H30v-3.882L22.12 15H18L3.882 9H4l7-7 7 7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

