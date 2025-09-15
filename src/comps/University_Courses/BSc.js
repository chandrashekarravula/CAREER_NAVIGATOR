// BSc.js
import React from 'react';

const BSc = () => {
  return (
    <>
    <div className="flex text-black text-center">
      <div className="flex-1 text-left pr-8 pl-4 pt-4 ml-4 mt-6">
        <h2 className="text-3xl font-bold mb-4">Bachelor of Science (B.Sc.)</h2>
        <h3 className="text-lg mb-6">
          A foundational undergraduate degree focusing on scientific knowledge and research.
        </h3>

        <h4 className="text-xl font-semibold mb-2">Available Branches:</h4>
        <ul className="list-disc pl-4 mb-6">
          <li>Mathematics</li>
          <li>Physics</li>
          <li>Chemistry</li>
          <li>Biology</li>
          <li>Computer Science</li>
        </ul>

        <h4 className="text-xl font-semibold mb-2">Job Opportunities:</h4>
        <ul className="list-disc pl-4">
          <li><strong>Mathematics:</strong> Data Analyst, Actuary, Statistician</li>
          <li><strong>Physics:</strong> Research Scientist, Aerospace Engineer, Lab Technician</li>
          <li><strong>Chemistry:</strong> Chemist, Pharmacologist, Quality Control Analyst</li>
          <li><strong>Biology:</strong> Biotechnologist, Microbiologist, Healthcare Specialist</li>
          <li><strong>Computer Science:</strong> Software Engineer, Web Developer, IT Specialist</li>
        </ul>
      </div>

      <div className="text-black text-right mt-28 mr-6">
        <img
          src={process.env.PUBLIC_URL + 'BSc.png'}
          alt="BSc Image"
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

export default BSc;
