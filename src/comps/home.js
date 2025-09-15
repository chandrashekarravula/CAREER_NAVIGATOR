// Home.js

import React from 'react';

const Home = () => {
  const handlePhotoClick = (photoNumber) => {
    alert(`Clicked Photo ${photoNumber}`);
  };

  const backgroundUrl = 'https://mcdn.wallpapersafari.com/medium/47/4/GdPE16.png';

  return (
    <>
    <div className="h-screen flex flex-col items-center justify-center relative">
      <h1 className="text-4xl mb-6 sm:mb-12">Welcome to Our Educational Platform</h1>

      <div className="container mx-auto flex items-start justify-center relative">
        {/* Regular href link to EleventhStandardCourses */}
        <a href="/eleventhstandard" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="photo flex-shrink-0 mx-2 px-5 relative border border-gray-200 hover:border-gray-400 p-4">
            <img
              src="https://img.freepik.com/free-vector/high-school-concept-illustration_114360-8279.jpg?w=1480&t=st=1704303865~exp=1704304465~hmac=1e3eacdc40ab5294c007f9031ad854c6a63ed53c9095ad09b9eb27f0d7cca7ce"
              alt="Photo 1"
              className="w-80 h-80 rounded-2xl overflow-hidden object-center object-cover"
            />
          </div>
        </a>

        {/* Href link to UniversityCourses */}
        <a href="/university" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="photo flex-shrink-0 mx-4 px-5 relative border border-gray-200 hover:border-gray-400 p-4">
            <img
              src="https://previews.123rf.com/images/vectorpouch/vectorpouch1807/vectorpouch180700093/104618005-college-building-vector-illustration-for-education-design-cartoon-facade-of-modern-or-retro-school.jpg"
              alt="Photo 2"
              className="w-80 h-80 rounded-2xl overflow-hidden object-center object-cover"
            />
          </div>
        </a>
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

export default Home;
