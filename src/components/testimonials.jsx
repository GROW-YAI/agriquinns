import React from 'react';
import johnDoe from '../assets/images/johndoe.jpg';
import janeSmith from '../assets/images/janedoe.jpg';
import PlaceholderImage from '../assets/images/4hero.jpg';
import heroImage from '../assets/images/pic4.jpg';


const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 bg-gray-100">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <h2 className="text-2xl font-bold leading-tight text-green-700 mb-4 text-start">What Our Customers Say</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-1/3 xl:w-1/3 mb-4 lg:mb-0">
            <img src={heroImage} alt="Placeholder Image" className="w-full h-full object-cover object-center rounded-lg shadow-lg" />
          </div>
          <div className="w-full lg:w-2/3 xl:w-2/3 pl-4 lg:pl-8 xl:pl-12">
            <div className="testimonial bg-white p-4 md:p-6 lg:p-8 xl:p-10 shadow-2xl rounded-3xl mb-8">
              <div className="flex items-center mb-4">
                <img src={johnDoe} alt="John Doe" className="w-16 h-16 rounded-full mr-4 border-2 border-gray-300" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-600">Kwesi Amoah</h3>
                  <p className="text-lg text-gray-500">Farmer</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-2 text-gray-600">"Agriquinns' fertilizers have improved the yield of my crops significantly. I'm impressed with the results!"</p>
            </div>
            <div className="testimonial bg-white p-4 md:p-6 lg:p-8 xl:p-10 shadow-2xl rounded-3xl">
              <div className="flex items-center mb-4">
                <img src={janeSmith} alt="Jane Smith" className="w-16 h-16 rounded-full mr-4 border-2 border-gray-300" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-600">Confort Mensah</h3>
                  <p className="text-lg text-gray-500">Gardener</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-2 text-gray-600">"I was impressed by the quality of Agriquinns' fertilizers. They're eco-friendly and effective!"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;