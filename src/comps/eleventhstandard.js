import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaTools, FaCertificate, FaDesktop, FaRocket } from 'react-icons/fa';

const EleventhStandard = () => {
  const educationalPaths = [
    {
      icon: <FaGraduationCap style={{ color: 'black' }} />,
      path: '/intermediate',
      title: 'Intermediate (10+2)',
      description: 'Continue traditional schooling with a focus on your chosen stream. Gain in-depth knowledge in subjects like Physics, Chemistry, and Mathematics.',
    },
    {
      icon: <FaTools style={{ color: 'black' }} />,
      path: '/polytechnic',
      title: 'Polytechnic',
      description: 'Dive into practical, skill-oriented learning in engineering and technology. Acquire hands-on experience in workshops and labs.',
    },
    {
      icon: <FaCertificate style={{ color: 'black' }} />,
      path: '/diploma',
      title: 'Diploma Courses',
      description: 'Specialize in specific fields through diploma programs. Earn industry-recognized certifications along the way.',
    },
    {
      icon: <FaDesktop style={{ color: 'black' }} />,
      path: '/iti',
      title: 'ITI Courses',
      description: "ITI courses provide vocational training in various trades such as electrician, plumber, welder, and mechanic, preparing individuals for skilled jobs in industries.",
    },
    {
      icon: <FaRocket style={{ color: 'black' }} />,
      path: '/other',
      title: 'Other Options',
      description: 'Discover alternative pathways tailored to your interests and goals. Launch your unique educational journey.',
    },
  ];

  return (
    <>
    <div className="flex text-black text-center">
      {/* Text on the left */}
      <div className="flex-1 text-left pr-8 pl-4 pt-4 mt-7">
        <h2 className="text-3xl font-bold mb-4">Choose Your Path After 10th</h2>
        <h3 className="text-xl font-semibold mb-2">Career Opportunities:</h3>
        <p className="text-lg">
          As you stand at the crossroads after completing 10th grade, there are diverse educational
          avenues to explore. Each path offers unique opportunities and challenges. Consider the
          following routes:
        </p>

        <ul className="list-disc pl-4 mt-2">
          {educationalPaths.map((path, index) => (
            <li key={index} className="mb-4">
              <span role="img" aria-label="Icon" className="mr-2">
                {path.icon}
              </span>
              <Link to={path.path} className="text-blue-500 hover:underline">
                {path.title}
              </Link>
              : {path.description}
            </li>
          ))}
        </ul>
      </div>

      {/* Image with border */}
      <div className="text-black text-right mt-36 mr-10 relative">
        <img
          src={process.env.PUBLIC_URL + '/ii.jpeg'}
          alt="Course Image"
          className="float-right mb-4 border border-black rounded-md"
          style={{ width: '700px', height: '400px' }} // Adjust width and height as needed
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

export default EleventhStandard;
