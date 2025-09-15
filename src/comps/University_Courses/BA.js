// BA.js
import React from 'react';

const BA = () => {
  return (
    <>
    <div className="flex text-black text-center">
      <div className="flex-1 text-left pr-8 pl-4 pt-4 ml-4 mt-6">
        <h2 className="text-3xl font-bold mb-4">Bachelor of Arts (B.A.)</h2>
        <h3 className="text-lg mb-6">
          A humanities-based undergraduate program focusing on social sciences, arts, and literature.
        </h3>

        <h4 className="text-xl font-semibold mb-2">Available Branches:</h4>
        <ul className="list-disc pl-4 mb-6">
          <li>English Literature</li>
          <li>History</li>
          <li>Psychology</li>
        </ul>

        <h4 className="text-xl font-semibold mb-2">Job Opportunities:</h4>
        <ul className="list-disc pl-4">
          <li><strong>English Literature:</strong> Teacher, Content Writer, Editor</li>
          <li><strong>History:</strong> Historian, Museum Curator, Archaeologist</li>
          <li><strong>Psychology:</strong> Clinical Psychologist, Counselor, HR Specialist</li>
        </ul>
      </div>

      <div className="text-black text-right mt-28 mr-6">
        <img
          src={process.env.PUBLIC_URL + 'BA.png'}
          alt="BA Image"
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

export default BA;
