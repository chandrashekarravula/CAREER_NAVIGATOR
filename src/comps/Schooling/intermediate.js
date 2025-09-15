// Intermediate.js
import React from 'react';

const Intermediate = () => {
  return (
    <>
    <div className="flex text-black text-center">
      {/* Text on the left */}
      <div className="flex-1 text-left pr-8 pl-4 pt-4 ml-4 mt-6">
        <h2 className="text-3xl font-bold mb-4">Intermediate (10+2)</h2>
        <h3 className="text-lg">Continue traditional schooling with a focus on your chosen stream.</h3>
         
        
        <h4 className="text-xl font-semibold mb-2">Regular Education:</h4>
        <p className="text-lg mb-4">
          - Emphasizes theoretical knowledge<br />
          - Leads to academic qualifications such as degrees<br />
          - Prepares students for a wide range of careers and further education opportunities, including competitive exams like EMCET, JEE Mains, and JEE Advanced
        </p>
        <ul className="list-disc pl-4">
          <li>
            <strong>EMCET (Engineering, Medical Common Entrance Test):</strong> EMCET is a common entrance test conducted for admission into various professional courses offered in the state of Telangana, India. It includes courses like Engineering, Agriculture, and Medical.
          </li>
          <li>
            <strong>JEE Mains (Joint Entrance Examination Mains):</strong> JEE Mains is an entrance exam for admission to various undergraduate engineering programs in India. It's the first stage for admission to the prestigious Indian Institutes of Technology (IITs).
          </li>
          <li>
            <strong>JEE Advanced (Joint Entrance Examination Advanced):</strong> JEE Advanced is the second stage of the Joint Entrance Examination (JEE). It's conducted for admission to various undergraduate programs offered by the IITs.
          </li>
        </ul>
        <h4 className="text-xl font-semibold mb-2">Vocational Education:</h4>
        <p className="text-lg">
          - Focuses on practical skills and hands-on training<br />
          - Prepares students for specific careers or trades immediately after completion
        </p>
      </div>

      {/* Image on the right */}
      <div className="text-black text-right mt-28 mr-6">
        <img
          src={process.env.PUBLIC_URL + '/ii2.jpeg'}
          alt="Intermediate Image"
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

export default Intermediate;
