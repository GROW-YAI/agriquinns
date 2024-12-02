import React from 'react';
import teamMember1 from '../assets/images/jessica.jpg';
import teamMember2 from '../assets/images/keziah.jpg';    
import teamMember3 from '../assets/images/fozia.jpg';    
import teamMember4 from '../assets/images/audet.jpg';

const OurTeam = () => {
  return (
    <section className="our-team-section py-20">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <h2 className="text-4xl font-bold text-green-700">Meet Our Team</h2>
        <p className="text-lg font-bold text-gray-600">Our team of experts are dedicated to providing high-quality agricultural products and services.</p>
        <div className="team-members flex flex-wrap justify-center">
          <div className="team-member w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <img src={teamMember1} alt="Team Member 1" className="w-full h-100 object-cover object-center mb-4" />
            <h3 className="text-lg font-bold text-green-700">Jessica Awaliga</h3>
            <p className="text-sm font-bold text-gray-600">Agricultural Specialist</p>
          </div>
          <div className="team-member w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <img src={teamMember2} alt="Team Member 2" className="w-full h-100 object-cover object-center mb-4" />
            <h3 className="text-lg font-bold text-green-700">Keziah Akuamoah</h3>
            <p className="text-sm font-bold text-gray-600">Agricultural Engineer</p>
          </div>
          <div className="team-member w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <img src={teamMember3} alt="Team Member 3" className="w-full h-100 object-cover object-center mb-4" />
            <h3 className="text-lg font-bold text-green-700">Foziatu Shaibu</h3>
            <p className="text-sm font-bold text-gray-600">Agricultural Economist</p>
          </div>
          <div className="team-member w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <img src={teamMember4} alt="Team Member 4" className="w-full h-100 object-cover object-center mb-4" />
            <h3 className="text-lg font-bold text-green-700">Audet Adzo</h3>
            <p className="text-sm font-bold text-gray-600">Agricultural Researcher</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;