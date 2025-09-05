// UniversityCourses.js

import React from 'react';

const UniversityCourses = () => {
  const universityData = [
    {
      id: 1,
      degree: 'Bachelor of Science (B.Sc.)',
      courses: [
        'Mathematics',
      'Physics',
      'Chemistry',
      'Biology',
      'Computer Science',
      ],
    },
    {
      id: 2,
      degree: 'Bachelor of Arts (B.A.)',
      courses: [
        'English Literature',
        'History',
        'Psychology',
      ],
    },
  {
    id: 3,
    degree: 'Bachelor of Technology (B.Tech)',
    courses: [
      'Computer Science Engineering',
      'Information Technology',
      'Electronics and Communication Engineering',
      'Mechanical Engineering',
      'Civil Engineering',
    ],
  },
  {
    id: 4,
    degree: 'Master of Technology (M.Tech)',
    courses: [
      'Artificial Intelligence',
      'Data Science',
      'Power Systems',
      'Structural Engineering',
    ],
  },
  
  {
    id: 5,
    degree: 'Master of Science (M.Sc)',
    courses: [
      'Applied Mathematics',
      'Microbiology',
      'Biotechnology',
      'Environmental Science',
    ],
  },
  {
    id: 6,
    degree: 'Bachelor of Business Administration (BBA)',
    courses: [
      'Finance',
      'Marketing',
      'Human Resource Management',
      'International Business',
    ],
  },
  {
    id: 7,
    degree: 'Master of Business Administration (MBA)',
    courses: [
      'Finance',
      'Marketing',
      'Operations Management',
      'Business Analytics',
      'Entrepreneurship',
    ],
  },
  {
    id: 8,
    degree: 'Bachelor of Commerce (B.Com)',
    courses: [
      'Accounting',
      'Banking and Insurance',
      'Taxation',
      'Business Law',
    ],
  },
  {
    id: 9,
    degree: 'Bachelor of Medicine, Bachelor of Surgery (MBBS)',
    courses: [
      'Anatomy',
      'Physiology',
      'Biochemistry',
      'Pathology',
      'Pharmacology',
    ],
  },
];

  return (
    <div className="text-black">
      <h2 className="text-2xl font-bold mb-4">University Courses</h2>

      {/* Render information about each degree and its courses */}
      {universityData.map((degree) => (
        <div key={degree.id} className="mb-4">
          <h3 className="text-xl font-semibold">{degree.degree}</h3>
          <ul className="list-disc ml-6">
            {degree.courses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
          <hr className="my-2" />
        </div>
      ))}
    </div>
  );
};

export default UniversityCourses;
