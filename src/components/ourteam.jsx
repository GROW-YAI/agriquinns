// import React from 'react';
// import teamMember1 from '../assets/images/jessica.jpg';
// import teamMember2 from '../assets/images/keziah.jpg';    
// import teamMember3 from '../assets/images/fozia.jpg';    
// import teamMember4 from '../assets/images/audet.jpg';

// const OurTeam = () => {
//   return (
//     <section className="our-team-section py-20">
//       <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
//         <h2 className="text-4xl font-bold text-green-700">Meet Our Team</h2>
//         <p className="text-lg font-bold text-gray-600">Our team of experts are dedicated to providing high-quality agricultural products and services.</p>
//         <div className="team-members flex flex-wrap justify-center">
//           <div className="team-member w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
//             <img src={teamMember1} alt="Team Member 1" className="w-full h-100 object-cover object-center mb-4" />
//             <h3 className="text-lg font-bold text-green-700">Jessica Awaliga</h3>
//             <p className="text-sm font-bold text-gray-600">Agricultural Specialist</p>
//           </div>
//           <div className="team-member w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
//             <img src={teamMember2} alt="Team Member 2" className="w-full h-100 object-cover object-center mb-4" />
//             <h3 className="text-lg font-bold text-green-700">Keziah Akuamoah</h3>
//             <p className="text-sm font-bold text-gray-600">Agricultural Engineer</p>
//           </div>
//           <div className="team-member w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
//             <img src={teamMember3} alt="Team Member 3" className="w-full h-100 object-cover object-center mb-4" />
//             <h3 className="text-lg font-bold text-green-700">Foziatu Shaibu</h3>
//             <p className="text-sm font-bold text-gray-600">Agricultural Economist</p>
//           </div>
//           <div className="team-member w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
//             <img src={teamMember4} alt="Team Member 4" className="w-full h-100 object-cover object-center mb-4" />
//             <h3 className="text-lg font-bold text-green-700">Audet Adzo</h3>
//             <p className="text-sm font-bold text-gray-600">Agricultural Researcher</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurTeam;

import React from 'react';
import teamMember1 from '../assets/images/jessica.jpg';
import teamMember2 from '../assets/images/keziah.jpg';
import teamMember3 from '../assets/images/fozia.jpg';
import teamMember4 from '../assets/images/audet.jpg';

const OurTeam = () => {
  return (
    <section className="our-team-section py-20">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <h2 className="text-2xl font-bold text-green-700">About Us</h2>
        <p className="text-lg  text-gray-600 text-justify">At Agriquinns, we are passionate about nurturing growth and cultivating a sustainable
future for agriculture. Our story began with a simple belief - that every seed holds the
potential for abundance, and it is our duty to provide the essential nutrients for it to
flourish.                                                                                                                                                                     Agriquinns is a leading fertilizer company dedicated to providing
innovative solutions to farmers, gardeners, and agricultural professionals worldwide. We
specialize in creating high-quality, environmentally-friendly fertilizers that promote soil
health, increase crop yields, and support sustainable farming practices.</p>
        <div className="write-up mb-12 py-10">
          <h3 className="text-2xl font-bold text-green-700">Our Team's Mission and Vision</h3>
          <p className=" text-gray-600 text-lg text-justify">
          Our mission at Agriquinns is to empower farmers with the knowledge
and tools they need to enhance food production while preserving natural resources for
future generations. We are committed to developing eco-friendly products that not only
boost plant growth but also protect the delicate balance of our ecosystems.
          </p>
          <p className="text-lg text-gray-600 text-justify py-10">
          From organic fertilizers to specialized blends for specific crops,
Agriquinns offers a wide range of products tailored to meet the unique needs of 
Agriquinns offers a wide range of products tailored to meet the unique needs of
different agricultural systems. Our team of experts is dedicated to conducting research
and development to ensure that our fertilizers deliver optimal results while minimizing
environmental impact.
          </p>
          <p className="text-lg text-gray-600 text-justify">
          When you choose Agriquinns, you are choosing a partner
who values integrity, sustainability, and innovation. We strive to establish long-lasting
relationships with our customers based on trust, reliability, and shared commitment to
advancing agriculture responsibly.
          </p>
          <p className="text-lg text-gray-600 text-justify">
          Join Us in Cultivating a Greener Future: Whether you are a small-scale farmer, a
commercial grower, or a gardening enthusiast, Agriquinns is here to support your
journey towards a more sustainable and prosperous future. Together, let's sow the seeds
of change and grow a healthier world for all.
          </p>
        </div>
        <h2 className="text-2xl font-bold text-green-700">Meet Our Team</h2>
        <div className="team-members flex flex-wrap justify-center">
          <div className="team-member w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <img src={teamMember1} alt="Team Member 1" className="w-full h-100 object-cover object-center mb-4 rounded-lg shadow-lg" />
            <h3 className="text-lg font-bold text-green-700">Jessica Awaliga</h3>
            <p className="text-sm font-bold text-gray-600">Agricultural Specialist</p>
          </div>
          <div className="team-member w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <img src={teamMember2} alt="Team Member 2" className="w-full h-100 object-cover object-center mb-4 rounded-lg shadow-lg" />
            <h3 className="text-lg font-bold text-green-700">Keziah Akuamoah</h3>
            <p className="text-sm font-bold text-gray-600">Agricultural Engineer</p>
          </div>
          <div className="team-member w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <img src={teamMember3} alt="Team Member 3" className="w-full h-100 object-cover object-center mb-4 rounded-lg shadow-lg" />
            <h3 className="text-lg font-bold text-green-700">Foziatu Shaibu</h3>
            <p className="text-sm font-bold text-gray-600">Agricultural Economist</p>
          </div>
          <div className="team-member w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <img src={teamMember4} alt="Team Member 4" className="w-full h-100 object-cover object-center mb-4 rounded-lg shadow-lg" />
            <h3 className="text-lg font-bold text-green-700">Audet Adzo</h3>
            <p className="text-sm font-bold text-gray-600">Agricultural Researcher</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
