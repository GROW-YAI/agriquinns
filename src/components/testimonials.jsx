import React from 'react';
import johnDoe from '../assets/images/johndoe.jpg';
import janeSmith from '../assets/images/janedoe.jpg';


const Testimonials = () => {
    return (
      <section id="testimonials" className="py-12 bg-green-700">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
          <h2 className="text-5xl font-bold leading-tight text-white mb-4">What Our Customers Say</h2>
          <div className="flex flex-wrap justify-center mb-4">
            <div className="testimonial bg-white p-4 md:p-6 lg:p-8 xl:p-10 w-full md:w-1/2 xl:w-1/3 mb-4 md:mb-6 lg:mb-8 xl:mb-10 shadow-xl rounded-2xl">
              <div className="flex items-center mb-4">
                <img src={johnDoe} alt="John Doe" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="text-lg font-bold text-gray-600">John Doe</h3>
                  <p className="text-sm text-gray-500">Farmer</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-2 text-gray-600">"Agriquinns' fertilizers have improved the yield of my crops significantly."</p>
            </div>
            <div className="testimonial bg-white p-4 md:p-6 lg:p-8 xl:p-10 w-full md:w-1/2 xl:w-1/3 mb-4 md:mb-6 lg:mb-8 xl:mb-10 shadow-xl rounded-2xl">
              <div className="flex items-center mb-4">
                <img src={janeSmith} alt="Jane Smith" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="text-lg font-bold text-gray-600">Jane Smith</h3>
                  <p className="text-sm text-gray-500">Gardener</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-2 text-gray-600">"I was impressed by the quality of Agriquinns' fertilizers. They're eco-friendly and effective."</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  