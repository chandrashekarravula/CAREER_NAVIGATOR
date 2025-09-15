// BTech.js
import React from 'react';

const BTech = () => {
  return (
    <>
    <div className="flex text-black text-center">
      <div className="flex-1 text-left pr-8 pl-4 pt-4 ml-4 mt-6">
        <h2 className="text-3xl font-bold mb-4">Bachelor of Technology (B.Tech)</h2>
        <h3 className="text-lg mb-6">
          A professional undergraduate program emphasizing engineering, technology, and innovation.
        </h3>

        <h4 className="text-xl font-semibold mb-2">Available Branches:</h4>
        <ul className="list-disc pl-4 mb-6">
          <li>Computer Science Engineering</li>
          <li>Information Technology</li>
          <li>Electronics and Communication Engineering</li>
          <li>Mechanical Engineering</li>
          <li>Civil Engineering</li>
        </ul>

        <h4 className="text-xl font-semibold mb-2">Job Opportunities:</h4>
        <ul className="list-disc pl-4">
          <li><strong>Computer Science Engineering:</strong> Software Developer, Data Scientist, AI Engineer</li>
          <li><strong>Information Technology:</strong> IT Consultant, Network Engineer, Cybersecurity Analyst</li>
          <li><strong>Electronics and Communication:</strong> Embedded Systems Engineer, Telecom Engineer, VLSI Designer</li>
          <li><strong>Mechanical Engineering:</strong> Design Engineer, Automotive Engineer, Production Engineer</li>
          <li><strong>Civil Engineering:</strong> Structural Engineer, Site Engineer, Urban Planner</li>
        </ul>
      </div>

      <div className="text-black text-right mt-28 mr-6">
        <img
          src={process.env.PUBLIC_URL + 'BTech.png'}
          alt="BTech Image"
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

export default BTech;
