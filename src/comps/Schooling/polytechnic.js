// Polytechnic.js
import React from 'react';

const Polytechnic = () => {
  return (
    <>
    <div className="flex text-black text-center">
      {/* Text on the left */}
      <div className="flex-1 text-left pr-8 pl-4 pt-4 ml-4 mt-4">
        <h2 className="text-3xl font-bold mb-4">Polytechnic</h2>
        
        <p className="text-lg mb-4">
          Polytechnic education focuses on providing hands-on training and practical skills in various fields of engineering and technology. Through workshops, labs, and real-world projects, students are prepared for careers in manufacturing, construction, and information technology industries.
        </p>
         
        <p className="text-lg mb-2"><strong>Brief Description of Courses:</strong></p>
        <ul className="text-left list-disc pl-6">
          <li><strong>Civil Engineering:</strong> Focuses on designing, constructing, and maintaining infrastructure.</li>
          <li><strong>Mechanical Engineering:</strong> Deals with the design and manufacture of mechanical systems.</li>
          <li><strong>Automobile Engineering:</strong> Specializes in designing and developing vehicles.</li>
          <li><strong>Principles of Communication Engineering:</strong> Covers principles and technologies in communication systems.</li>
          <li><strong>Mining Engineering:</strong> Involves the extraction of minerals from the earth.</li>
          <li><strong>Animation Arts:</strong> Explores the creation of animated content.</li>
          <li><strong>Chemical Engineering:</strong> Focuses on the design and operation of chemical plants.</li>
          <li><strong>Computer Engineering:</strong> Involves designing and developing computer systems and software.</li>
          <li><strong>Aeronautical Engineering:</strong> Deals with the design and manufacture of aircraft.</li>
          <li><strong>Environmental Engineering:</strong> Focuses on solving environmental problems through engineering solutions.</li>
          <li><strong>Biotechnology Engineering:</strong> Involves the application of biological principles to create products and processes.</li>
          <li><strong>Information Technology:</strong> Focuses on the management and processing of information using technology.</li>
          <li><strong>Electronics and Communication Engineering:</strong> Deals with electronic devices and communication systems.</li>
        </ul>
      </div>

      {/* Image on the right */}
      <div className="text-black text-right mt-28 mr-6">
        <img
          src={process.env.PUBLIC_URL + 'ii3.jpeg'}
          alt="Polytechnic Image"
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

export default Polytechnic;
