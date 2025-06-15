// UniversityCourses.js

import React from 'react';

const UniversityCourses = () => {
  const universityData = [
    {
      id: 1,
      degree: 'Bachelor of Science (B.Sc.)',
      courses: [
        'Computer Science',
        'Physics',
        'Mathematics',
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
    // Add more degrees and courses as needed
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
