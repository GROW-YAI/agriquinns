import React from 'react';

const Blog = () => {
  return (
    <section className="blog-section py-20">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <h2 className="text-4xl font-bold text-green-700">Our Blog</h2>
        <p className="text-lg font-bold text-gray-600">Stay up-to-date with the latest news and trends in agriculture.</p>
        <div className="blog-posts flex flex-wrap justify-center">
          <div className="blog-post w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <img src="blog-post-1.jpg" alt="Blog Post 1" className="w-full h-64 object-cover object-center mb-4" />
            <h3 className="text-lg font-bold text-green-700">The Future of Agriculture: Trends to Watch</h3>
            <p className="text-sm font-bold text-gray-600">January 10, 2023</p>
          </div>
          <div className="blog-post w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <img src="blog-post-2.jpg" alt="Blog Post 2" className="w-full h-64 object-cover object-center mb-4" />
            <h3 className="text-lg font-bold text-green-700">The Benefits of Organic Farming</h3>
            <p className="text-sm font-bold text-gray-600">February 20, 2023</p>
          </div>
          <div className="blog-post w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <img src="blog-post-3.jpg" alt="Blog Post 3" className="w-full h-64 object-cover object-center mb-4" />
            <h3 className="text-lg font-bold text-green-700">The Impact of Climate Change on Agriculture</h3>
            <p className="text-sm font-bold text-gray-600">March 15, 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;