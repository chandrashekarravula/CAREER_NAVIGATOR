// BBA.js
import React from 'react';

const BBA = () => {
  return (
    <>
    <div className="flex text-black text-center">
      <div className="flex-1 text-left pr-8 pl-4 pt-4 ml-4 mt-6">
        <h2 className="text-3xl font-bold mb-4">Bachelor of Business Administration (BBA)</h2>
        <h3 className="text-lg mb-6">
          An undergraduate course focusing on business management and corporate leadership skills.
        </h3>

        <h4 className="text-xl font-semibold mb-2">Available Branches:</h4>
        <ul className="list-disc pl-4 mb-6">
          <li>Finance</li>
          <li>Marketing</li>
          <li>Human Resource Management</li>
          <li>International Business</li>
        </ul>

        <h4 className="text-xl font-semibold mb-2">Job Opportunities:</h4>
        <ul className="list-disc pl-4">
          <li><strong>Finance:</strong> Financial Analyst, Investment Banker, Accountant</li>
          <li><strong>Marketing:</strong> Marketing Executive, Brand Manager, Digital Marketer</li>
          <li><strong>Human Resource Management:</strong> HR Manager, Recruiter, Training Specialist</li>
          <li><strong>International Business:</strong> Export Manager, Trade Consultant, Global Business Analyst</li>
        </ul>
      </div>
      <div className="text-black text-right mt-28 mr-6">
        <img
          src={process.env.PUBLIC_URL + 'BBA.png'}
          alt="BBA Image"
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

export default BBA;
