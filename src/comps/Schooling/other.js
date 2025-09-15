import React from 'react';

const OtherOptions = () => {
  return (
    <>
    <div className="flex text-black text-center">
      {/* Text on the left */}
      <div className="flex-1 text-left pr-8 pl-4 pt-4 ml-4 mt-10">
        <h2 className="text-3xl font-bold mb-4">Other Options</h2>
        <p className="text-lg mb-4">
          Explore alternative pathways tailored to your interests and goals. Consider options such as:
        </p>
        <ul className="list-disc pl-4">
          <li>Photography: Master the art of capturing moments through the lens.</li>
          <li>Musician: Dive into the world of music and master an instrument or voice.</li>
          <li>Entrepreneurship: Build and manage your own business ventures.</li>
          <li>Sports: Pursue excellence in athletics and sportsmanship.</li>
          <li>Politics: Engage in the study of governance, policy-making, and public affairs.</li>
          <li>Direction: Explore the art of storytelling through film, theater, or television.</li>
          <li>Acting: Unleash your creativity and expressiveness through the art of acting.</li>
        </ul>
      </div>

      {/* Image on the right */}
      <div className="text-black text-right mt-28 mr-6">
       
<img
          src={process.env.PUBLIC_URL + 'ii6.jpeg'}
          alt="Other Options Image"
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

export default OtherOptions;
