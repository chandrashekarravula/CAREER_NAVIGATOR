import React, { useState } from 'react';
import NavBar from './Navbar';

const Landing = () => {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
     <>
    <div className="bg-cover bg-center min-h-screen flex items-center justify-start" style={{ backgroundImage: 'url("https://mcdn.wallpapersafari.com/medium/47/4/GdPE16.png")' }}>
      <div className="container mx-auto p-10 text-white mr-10">
        <h1 className="text-4xl mb-1 mt-0">WEB APPLICATION TO HELP STUDENTS FOR SEARCHING</h1>
        <div className="dev">
          <h1 className="text-2xl">A POST-SCHOOL EDUCATION</h1>
          <div className="um mt-5">
            <p>Discover the power of informed decision-making with this Application.</p>
            <p>We specialize in providing comprehensive and personalized guidance to</p>
            <p>students, ensuring that they make the right choices for their academic and</p>
            <p>professional futures. Your academic success begins with informed choices</p>
            <p>today and embark on a journey of educational exploration and Unlock the</p>
            <p>doors to your future.</p>

            {showMore ? (
              <>
                <p>Benefit from personalized guidance that takes into account your prefe</p>
                <p>-rences, academic strengths, and career ambitions and armed with deta</p>
                <p>-iled information, make confident decisions about the next steps in your{' '}</p>
                <p>educational journey.</p>
              </>
            ) : null}
            <div className="button mt-8">
              <button
                className="read border border-white rounded px-4 py-2 focus:outline-none"
                onClick={handleReadMore}
              >
                {showMore ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer Section */}
      <footer className="bg-gray-900 text-white text-center py-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Chandrashekar Ravula &mdash; Career Navigator
        </p>
      </footer>
    </>
  );
};

export default Landing;
