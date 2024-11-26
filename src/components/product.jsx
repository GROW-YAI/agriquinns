import React from 'react';
import fertilizerBags from '../assets/images/fertilizerbag.jpg';
import fertilizerImage2 from '../assets/images/fertilizer2.jpg';
import fertilizerImage3 from '../assets/images/fertilizer3.jpg';

const Products = () => {
    return (
      <section id="products" className="py-12 bg-white">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
          <h2 className="text-4xl font-bold leading-tight text-green-700 mb-4">Our Products</h2>
          <div className="flex flex-wrap justify-center mb-4">
            <img src={fertilizerBags} alt="Fertilizer Bags" className="w-full md:w-1/2 xl:w-1/3 p-4" />
            <img src={fertilizerImage2} alt="Fertilizer Image 2" className="w-full md:w-1/2 xl:w-1/3 p-4" />
            <img src={fertilizerImage3} alt="Fertilizer Image 3" className="w-full md:w-1/2 xl:w-1/3 p-4" />
          </div>
          <p className="text-lg leading-relaxed mb-4">Our fertilizers are made from coconut shells, which are rich in nutrients.</p>
          <ul className="list-disc pl-4 mb-4">
            <li className="text-lg leading-relaxed mb-2">High-quality fertilizers</li>
            <li className="text-lg leading-relaxed mb-2">Eco-friendly and sustainable</li>
            <li className="text-lg leading-relaxed mb-2">Rich in nutrients</li>
          </ul>
        </div>
      </section>
    );
  };
  
  export default Products;
  