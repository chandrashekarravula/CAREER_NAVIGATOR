// MBA.js
import React from 'react';

const MBA = () => {
  return (
    <>
    <div className="flex text-black text-center">
      <div className="flex-1 text-left pr-8 pl-4 pt-4 ml-4 mt-6">
        <h2 className="text-3xl font-bold mb-4">Master of Business Administration (MBA)</h2>
        <h3 className="text-lg mb-6">
          A postgraduate course focused on advanced management, leadership, and business strategy.
        </h3>

        <h4 className="text-xl font-semibold mb-2">Available Branches:</h4>
        <ul className="list-disc pl-4 mb-6">
          <li>Finance</li>
          <li>Marketing</li>
          <li>Operations Management</li>
          <li>Business Analytics</li>
          <li>Entrepreneurship</li>
        </ul>

        <h4 className="text-xl font-semibold mb-2">Job Opportunities:</h4>
        <ul className="list-disc pl-4">
          <li><strong>Finance:</strong> Investment Banker, Portfolio Manager</li>
          <li><strong>Marketing:</strong> Marketing Manager, Brand Strategist</li>
          <li><strong>Operations Management:</strong> Operations Manager, Supply Chain Analyst</li>
          <li><strong>Business Analytics:</strong> Business Analyst, Data Consultant</li>
          <li><strong>Entrepreneurship:</strong> Startup Founder, Business Consultant</li>
        </ul>
      </div>

      <div className="text-black text-right mt-28 mr-6">
        <img
          src={process.env.PUBLIC_URL + 'MBA.png'}
          alt="MBA Image"
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

export default MBA;
