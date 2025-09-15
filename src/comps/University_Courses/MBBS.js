// MBBS.js
import React from 'react';

const MBBS = () => {
  return (
    <>
    <div className="flex text-black text-center">
      <div className="flex-1 text-left pr-8 pl-4 pt-4 ml-4 mt-6">
        <h2 className="text-3xl font-bold mb-4">Bachelor of Medicine, Bachelor of Surgery (MBBS)</h2>
        <h3 className="text-lg mb-6">
          A professional undergraduate medical degree that trains students to become doctors and healthcare specialists.
        </h3>

        <h4 className="text-xl font-semibold mb-2">Available Branches:</h4>
        <ul className="list-disc pl-4 mb-6">
          <li>Anatomy</li>
          <li>Physiology</li>
          <li>Biochemistry</li>
          <li>Pathology</li>
          <li>Pharmacology</li>
        </ul>

        <h4 className="text-xl font-semibold mb-2">Job Opportunities:</h4>
        <ul className="list-disc pl-4">
          <li><strong>Anatomy:</strong> Surgeon, Medical Professor</li>
          <li><strong>Physiology:</strong> Physician, Clinical Researcher</li>
          <li><strong>Biochemistry:</strong> Medical Scientist, Biochemist</li>
          <li><strong>Pathology:</strong> Pathologist, Laboratory Specialist</li>
          <li><strong>Pharmacology:</strong> Pharmacologist, Clinical Pharmacist, Drug Researcher</li>
        </ul>
      </div>

      <div className="text-black text-right mt-28 mr-6">
        <img
          src={process.env.PUBLIC_URL + 'MBBS.png'}
          alt="MBBS Image"
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

export default MBBS;
