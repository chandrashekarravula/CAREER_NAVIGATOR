// BCom.js
import React from 'react';

const BCom = () => {
  return (
    <>
    <div className="flex text-black text-center">
      <div className="flex-1 text-left pr-8 pl-4 pt-4 ml-4 mt-6">
        <h2 className="text-3xl font-bold mb-4">Bachelor of Commerce (B.Com)</h2>
        <h3 className="text-lg mb-6">
          An undergraduate program specializing in finance, accounting, and commerce-related disciplines.
        </h3>

        <h4 className="text-xl font-semibold mb-2">Available Branches:</h4>
        <ul className="list-disc pl-4 mb-6">
          <li>Accounting</li>
          <li>Banking and Insurance</li>
          <li>Taxation</li>
          <li>Business Law</li>
        </ul>

        <h4 className="text-xl font-semibold mb-2">Job Opportunities:</h4>
        <ul className="list-disc pl-4">
          <li><strong>Accounting:</strong> Accountant, Auditor, Financial Planner</li>
          <li><strong>Banking and Insurance:</strong> Bank Officer, Risk Analyst, Insurance Advisor</li>
          <li><strong>Taxation:</strong> Tax Consultant, GST Specialist, Financial Analyst</li>
          <li><strong>Business Law:</strong> Legal Advisor, Compliance Officer, Corporate Lawyer</li>
        </ul>
      </div>
      <div className="text-black text-right mt-28 mr-6">
        <img
          src={process.env.PUBLIC_URL + 'BCom.png'}
          alt="BCom Image"
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

export default BCom;
