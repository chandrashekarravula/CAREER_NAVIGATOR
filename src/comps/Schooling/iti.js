import React from 'react';

const Iti = () => {
  return (
    <>
    <div className="flex text-black text-center">
      {/* Text on the left */}
      <div className="flex-1 text-left pr-8 pl-4 pt-4 ml-4 mt-10">
        <h2 className="text-3xl font-bold mb-4">ITI Courses</h2>
        <h3 className="text-lg">Gain vocational training in various trades.</h3>
        <p className="text-lg mb-4">
          ITI courses offer vocational training in various trades, including:
        </p>
        <ul className="list-disc pl-4 mb-4">
          <li><strong>Fitter:</strong> Installs, maintains, and repairs machinery and equipment.</li>
          <li><strong>Carpenter:</strong> Constructs and repairs wooden structures and fixtures.</li>
          <li><strong>Electrician:</strong> Installs, maintains, and repairs electrical systems and equipment.</li>
          <li><strong>Mechanic:</strong> Repairs and maintains machinery and mechanical equipment.</li>
          <li><strong>Driver cum Mechanic:</strong> Drives vehicles and performs basic maintenance and repairs.</li>
          <li><strong>Machinist:</strong> Operates and maintains machine tools to produce precision metal parts.</li>
          <li><strong>Welder:</strong> Joins metal parts using heat and/or pressure techniques.</li>
          <li><strong>Health Sanitary Inspector:</strong> Ensures public health standards are met in sanitation and hygiene.</li>
          <li><strong>ITI COPA course:</strong> Trains in computer operation and programming assistant skills.</li>
          <li><strong>Draughtsman:</strong> Prepares technical drawings and plans for construction and manufacturing.</li>
          <li><strong>Plumber:</strong> Installs and repairs piping systems used for water, gas, and sewage.</li>
          <li><strong>Tool and Die Maker:</strong> Designs and constructs tools, dies, and fixtures for manufacturing processes.</li>
          <li><strong>Technician:</strong> Performs technical tasks and assists engineers in various fields.</li>
        </ul>
        <p className="text-lg">
          These programs prepare individuals for skilled jobs in industries such as manufacturing, construction, automotive, and more.
        </p>
      </div>

      {/* Image on the right */}
      <div className="text-black text-right mt-28 mr-6">
        <img
          src={process.env.PUBLIC_URL + 'ii5.jpeg'}
          alt="ITI Course Image"
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

export default Iti;
