// import React from 'react';
// import blogpost1 from '../assets/images/1hero.jpg';
// import blogpost2 from '../assets/images/2blog.jpg';
// import blogpost3 from '../assets/images/3blog.jpg';

// const Blog = () => {
//   return (
//     <section className="blog-section py-20">
//       <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
//         <h2 className="text-4xl font-bold text-green-700">Our Blog</h2>
//         <p className="text-lg font-bold text-gray-600">Stay up-to-date with the latest news and trends in agriculture.</p>
//         <div className="blog-posts">
//           <div className="blog-post mb-12">
//             <img src={blogpost1} alt="Blog Post 1" className="w-full max-h-96 object-cover object-center mb-4" />
//             <h3 className="text-lg font-bold text-green-700">Women Cultivating Change: Empowering Women in Agriculture</h3>
//             <p className="text-sm font-bold text-gray-600">March 11, 2024</p>
//             <p className="text-sm text-gray-600 mt-2">Agriculture is the backbone of many communities around the world, providing sustenance, income, and employment for millions of people. However, despite their significant contributions, women in agriculture often face numerous challenges, including limited access to resources, markets, and decision-making opportunities.

// At Agriquinns, we believe that empowering women in agriculture is crucial for cultivating change and promoting sustainable development. Our initiative, "Women Cultivating Change," aims to support and amplify the voices of women farmers, entrepreneurs, and leaders in the agricultural sector.</p>
//             <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded mt-4">Read More</button>
//           </div>
//           <div className="blog-post mb-12">
//             <img src={blogpost2} alt="Blog Post 2" className="w-full max-h-96 object-cover object-center mb-4" />
//             <h3 className="text-lg font-bold text-green-700">Embracing Sustainability: A Deep Dive into Sustainable Farming Practices</h3>
//             <p className="text-sm font-bold text-gray-600">March 11, 2024</p>
//             <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
//             <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded mt-4">Read More</button>
//           </div>
//           <div className="blog-post">
//             <img src={blogpost3} alt="Blog Post 3" className="w-full max-h-96 object-cover object-center mb-4" />
//             <h3 className="text-lg font-bold text-green-700">Revolutionizing Agriculture: The Power of Precision Farming</h3>
//             <p className="text-sm font-bold text-gray-600">March 11, 2024</p>
//             <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
//             <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded mt-4">Read More</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blog;

import React, { useState } from 'react';
import blogpost1 from '../assets/images/1hero.jpg';
import blogpost2 from '../assets/images/2blog.jpg';
import blogpost3 from '../assets/images/3blog.jpg';

const Blog = () => {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);

  return (
    <section className="blog-section py-20">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <h2 className="text-4xl font-bold text-green-700">Our Blog</h2>
        <p className="text-lg font-bold text-gray-600 py-10">Stay up-to-date with the latest news and trends in agriculture.</p>
        <div className="blog-posts">
          <div className="blog-post mb-12">
            <img src={blogpost1} alt="Blog Post 1" className="w-full max-h-96 object-cover object-center  rounded-lg shadow-lg mb-4" />
            <h3 className="text-lg font-bold text-green-700">Women Cultivating Change: Empowering Women in Agriculture</h3>
            <p className="text-sm font-bold text-gray-600">March 11, 2024</p>
            <p className="text-lg text-gray-600 mt-2">
              {showMore1 ? (
                <span>
                  <p className="text-lg text-gray-600">
                  Women make up a significant proportion of the agricultural workforce, yet they often face</p>

1. Limited access to land, credit, and other resources
2. Restricted decision-making power and participation in agricultural policy-making
3. Inadequate training and extension services
4. Limited market access and poor prices for their products
5. Heavy workloads and time burdens due to unpaid care work

                </span>
              ) : (
                <span>
                  Agriculture is the backbone of many communities around the world, providing sustenance, income, and employment for millions of people. However, despite their significant contributions, women in agriculture often face numerous challenges, including limited access to resources, markets, and decision-making opportunities.

At Agriquinns, we believe that empowering women in agriculture is crucial for cultivating change and promoting sustainable development. Our initiative, "Women Cultivating Change," aims to support and amplify the voices of women farmers, entrepreneurs, and leaders in the agricultural sector.
                </span>
              )}
            </p>
            <button
              className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={() => setShowMore1(!showMore1)}
            >
              {showMore1 ? 'Read Less' : 'Read More'}
            </button>
          </div>
          <div className="blog-post mb-12">
            <img src={blogpost2} alt="Blog Post 2" className="w-full max-h-96 object-cover object-center mb-4 rounded-lg shadow-lg" />
            <h3 className="text-lg font-bold text-green-700">Embracing Sustainability: A Deep Dive into Sustainable Farming Practices</h3>
            <p className="text-lg font-bold text-gray-600">March 11, 2024</p>
            <p className="text-lg text-gray-600 mt-2">
              {showMore2 ? (
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                </span>
              ) : (
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
                </span>
              )}
            </p>
            <button
              className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={() => setShowMore2(!showMore2)}
            >
              {showMore2 ? 'Read Less' : 'Read More'}
            </button>
          </div>
          <div className="blog-post">
            <img src={blogpost3} alt="Blog Post 3" className="w-full max-h-96 object-cover object-center mb-4 rounded-lg shadow-lg" />
            <h3 className="text-lg font-bold text-green-700">Revolutionizing Agriculture: The Power of Precision Farming</h3>
            <p className="text-lg font-bold text-gray-600">March 11, 2024</p>
            <p className="text-lg text-gray-600 mt-2">
              {showMore3 ? (
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatisdapibus posuere velit aliquet.
            </span>
          ) : (
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
            </span>
          )}
        </p>
        <button
          className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => setShowMore3(!showMore3)}
        >
          {showMore3 ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  </div>
</section>

);
};

export default Blog;