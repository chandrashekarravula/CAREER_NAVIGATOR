// MTech.js
import React from 'react';

const MTech = () => {
  return (
    <>
    <div className="flex text-black text-center">
      <div className="flex-1 text-left pr-8 pl-4 pt-4 ml-4 mt-6">
        <h2 className="text-3xl font-bold mb-4">Master of Technology (M.Tech)</h2>
        <h3 className="text-lg mb-6">
          A postgraduate degree that deepens technical expertise in specialized engineering fields.
        </h3>

        <h4 className="text-xl font-semibold mb-2">Available Branches:</h4>
        <ul className="list-disc pl-4 mb-6">
          <li>Artificial Intelligence</li>
          <li>Data Science</li>
          <li>Power Systems</li>
          <li>Structural Engineering</li>
        </ul>

        <h4 className="text-xl font-semibold mb-2">Job Opportunities:</h4>
        <ul className="list-disc pl-4">
          <li><strong>Artificial Intelligence:</strong> AI Researcher, Machine Learning Engineer</li>
          <li><strong>Data Science:</strong> Data Scientist, Big Data Analyst, Business Intelligence Expert</li>
          <li><strong>Power Systems:</strong> Power Engineer, Energy Consultant, Grid Analyst</li>
          <li><strong>Structural Engineering:</strong> Structural Consultant, Infrastructure Designer</li>
        </ul>
      </div>

      <div className="text-black text-right mt-28 mr-6">
        <img
          src={process.env.PUBLIC_URL + 'MTech.png'}
          alt="MTech Image"
          className="float-right mb-4 border border-black rounded-md"
          style={{ width: '700px', height: '400px' }}
        />
      </div>
    </div>
    <footer className="bg-gray-900 text-white text-center py-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Chandrashekar Ravula &mdash; Career Navigator
        </p>
      </footer>
      </>
  );
};

export default MTech;
