import React from 'react';
import fertilizerBags from '../assets/images/agricocopeat.jpg';
import fertilizerImage2 from '../assets/images/farmer3.jpg';
import fertilizerImage3 from '../assets/images/farmer4.jpg';

const Products = () => {
    return (
      <section id="products" className="py-12 bg-white">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
          <h2 className="text-4xl font-bold leading-tight text-green-700 mb-4">Our Product</h2>
          <div className="flex flex-wrap justify-center mb-4">
            <img src={fertilizerBags} alt="Fertilizer Bags" className="w-full md:w-1/2 xl:w-1/3 p-4" />
            <img src={fertilizerImage2} alt="Fertilizer Image 2" className="w-full md:w-1/2 xl:w-1/3 p-4" />
            <img src={fertilizerImage3} alt="Fertilizer Image 3" className="w-full md:w-1/2 xl:w-1/3 p-4" />
          </div>
          <p className="text-lg leading-relaxed mb-4">Introducing Agriquinns Fertilizer, a revolutionary, eco-friendly solution for sustainable farming practices. Our innovative fertilizers are carefully crafted from coconut husk, a rich source of essential nutrients.

With its unique blend of antifungal properties, Agriquinns Fertilizer effectively:
</p>
          <ul className="list-disc pl-4 mb-4 text-green-700">
            <li className="text-lg leading-relaxed mb-2">Curbs pest infestations, reducing the need for chemical pesticides</li>
            <li className="text-lg leading-relaxed mb-2">Restores soil nutrients, promoting healthy soil microbiology</li>
            <li className="text-lg leading-relaxed mb-2">Enhances crop yield, resulting in higher-quality produce
            </li>
          </ul>
          <p className="text-lg leading-relaxed mb-4">Ideal for vegetable, cereal, and green crop farmers, Agriquinns Fertilizer ensures sustainable and organic farming practices. Our high-quality fertilizers offer numerous benefits, including:
</p>
<ul className="list-disc pl-4 mb-4 text-green-700">
            <li className="text-lg leading-relaxed mb-2">Eco-friendly and sustainable production process</li>
            <li className="text-lg leading-relaxed mb-2">Rich in nutrients, promoting healthy plant growth</li>
            <li className="text-lg leading-relaxed mb-2">Supports soil biodiversity, reducing environmental degradation
            </li>
          </ul>
          <p className="text-lg leading-relaxed mb-4"> By choosing Agriquinns Fertilizer, you're not only improving your crop yields but also contributing to a more sustainable and environmentally conscious farming future.
</p>
        </div>
      </section>
    );
  };
  
  export default Products;
  