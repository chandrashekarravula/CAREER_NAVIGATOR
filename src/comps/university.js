// University.js
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { 
  FaFlask,         // Science
  FaBook,          // Arts
  FaLaptopCode,    // Technology / Engineering
  FaMicroscope,    // M.Sc
  FaProjectDiagram,// M.Tech
  FaBusinessTime,  // BBA
  FaUserTie,       // MBA
  FaBalanceScale,  // Commerce
} from 'react-icons/fa';
import { GiStethoscope } from 'react-icons/gi'; // MBBS (medical)

import BSc from './University_Courses/BSc';
import BA from './University_Courses/BA';
import BTech from './University_Courses/BTech';
import MTech from './University_Courses/MTech';
import MSc from './University_Courses/MSc';
import BBA from './University_Courses/BBA';
import MBA from './University_Courses/MBA';
import BCom from './University_Courses/BCom';
import MBBS from './University_Courses/MBBS';

const University = () => {
  const universityPaths = [
    {
      icon: <FaFlask style={{ color: 'black' }} />,
      path: '/bsc',
      title: 'B.Sc (Bachelor of Science)',
      description: 'Covers core sciences like Physics, Chemistry, Mathematics, Biology, and Computer Science. Prepares students for research and technical fields.',
    },
    {
      icon: <FaBook style={{ color: 'black' }} />,
      path: '/ba',
      title: 'B.A (Bachelor of Arts)',
      description: 'Focuses on subjects such as English, History, Political Science, Economics, and Psychology. Ideal for careers in education, social sciences, and communication.',
    },
    {
      icon: <FaLaptopCode style={{ color: 'black' }} />,
      path: '/btech',
      title: 'B.Tech (Bachelor of Technology)',
      description: 'A professional engineering program with branches like Computer Science, IT, Mechanical, Civil, and Electrical Engineering.',
    },
    {
      icon: <FaProjectDiagram style={{ color: 'black' }} />,
      path: '/mtech',
      title: 'M.Tech (Master of Technology)',
      description: 'Postgraduate program in advanced engineering fields such as AI, Robotics, Data Science, and Power Systems.',
    },
    {
      icon: <FaMicroscope style={{ color: 'black' }} />,
      path: '/msc',
      title: 'M.Sc (Master of Science)',
      description: 'Master’s program in Applied Mathematics, Biotechnology, Microbiology, and Environmental Science, leading to research and specialist roles.',
    },
    {
      icon: <FaBusinessTime style={{ color: 'black' }} />,
      path: '/bba',
      title: 'BBA (Bachelor of Business Administration)',
      description: 'Management-focused undergraduate course that opens doors to careers in Marketing, HR, Finance, and International Business.',
    },
    {
      icon: <FaUserTie style={{ color: 'black' }} />,
      path: '/mba',
      title: 'MBA (Master of Business Administration)',
      description: 'Prestigious postgraduate degree in management, offering specializations in Finance, Marketing, Operations, and Entrepreneurship.',
    },
    {
      icon: <FaBalanceScale style={{ color: 'black' }} />,
      path: '/bcom',
      title: 'B.Com (Bachelor of Commerce)',
      description: 'Focuses on Accounting, Taxation, Banking, and Business Law. Suitable for careers in commerce, finance, and corporate management.',
    },
    {
      icon: <GiStethoscope style={{ color: 'black' }} />,
      path: '/mbbs',
      title: 'MBBS (Bachelor of Medicine, Bachelor of Surgery)',
      description: 'Professional medical degree training in Anatomy, Physiology, Pathology, and Pharmacology. Leads to careers as doctors and surgeons.',
    },
  ];

  return (
    <>
    <div className="flex text-black text-center">
      {/* Text on the left */}
      <div className="flex-1 text-left pr-8 pl-4 pt-4 mt-7">
        <h2 className="text-3xl font-bold mb-4">Choose Your University Course</h2>
        <h3 className="text-xl font-semibold mb-2">Available Options:</h3>
        <p className="text-lg">
          University education opens diverse academic and professional opportunities. Each program
          is designed to build knowledge, skills, and expertise in specialized areas. Explore the
          following options:
        </p>

        <ul className="list-disc pl-4 mt-2">
          {universityPaths.map((course, index) => (
            <li key={index} className="mb-4">
              <span role="img" aria-label="Icon" className="mr-2">
                {course.icon}
              </span>
              <Link to={course.path} className="text-blue-500 hover:underline">
                {course.title}
              </Link>
              : {course.description}
            </li>
          ))}
        </ul>
      </div>
          {/* Image on the right */}
      <div className="text-black text-right mt-28 mr-6">
        <img
          src={process.env.PUBLIC_URL + 'University.png'}
          alt="UniversityCourses Image"
          className="float-right mb-4 border border-black rounded-md"
          style={{ width: '700px', height: '400px' }}
        />
      </div>
      
      <Routes>
        <Route path="bsc" element={<BSc />} />
        <Route path="ba" element={<BA />} />
        <Route path="btech" element={<BTech />} />
        <Route path="mtech" element={<MTech />} />
        <Route path="msc" element={<MSc />} />
        <Route path="bba" element={<BBA />} />
        <Route path="mba" element={<MBA />} />
        <Route path="bcom" element={<BCom />} />
        <Route path="mbbs" element={<MBBS />} />
      </Routes>
    </div>
    <footer className="bg-gray-900 text-white text-center py-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Chandrashekar Ravula &mdash; Career Navigator
        </p>
      </footer>
      </>
  );
};

export default University;
