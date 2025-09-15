// MSc.js
import React from 'react';

const MSc = () => {
  return (
    <>
    <div className="flex text-black text-center">
      <div className="flex-1 text-left pr-8 pl-4 pt-4 ml-4 mt-6">
        <h2 className="text-3xl font-bold mb-4">Master of Science (M.Sc.)</h2>
        <h3 className="text-lg mb-6">
          A postgraduate program advancing knowledge in science, research, and specialization.
        </h3>

        <h4 className="text-xl font-semibold mb-2">Available Branches:</h4>
        <ul className="list-disc pl-4 mb-6">
          <li>Applied Mathematics</li>
          <li>Microbiology</li>
          <li>Biotechnology</li>
          <li>Environmental Science</li>
        </ul>

        <h4 className="text-xl font-semibold mb-2">Job Opportunities:</h4>
        <ul className="list-disc pl-4">
          <li><strong>Applied Mathematics:</strong> Data Scientist, Research Analyst, Actuary</li>
          <li><strong>Microbiology:</strong> Microbiologist, Lab Scientist, Healthcare Analyst</li>
          <li><strong>Biotechnology:</strong> Biotech Engineer, Pharma Scientist, Genetic Engineer</li>
          <li><strong>Environmental Science:</strong> Environmental Consultant, Ecologist, Policy Advisor</li>
        </ul>
      </div>

      <div className="text-black text-right mt-28 mr-6">
        <img
          src={process.env.PUBLIC_URL + 'MSc.png'}
          alt="MSc Image"
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

export default MSc;
