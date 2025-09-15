import React from 'react';

const About = () => {
   
  return (
    <>
    <div className="max-w-3xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-gray-600 mb-8">Welcome to our web application!</p>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
        <p className="text-gray-700">
          To empower students and professionals by providing personalized guidance, resources, and clear pathways to achieve their career aspirations, enabling them to make informed decisions and succeed in a rapidly changing job market.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Our Team</h3>
        <p className="text-gray-700">
          The Career Navigator team is a group of dedicated members working together to design, develop, and deliver the platform for the students to achieve their career goal. By collaborating effectively, the team ensures that Career Navigator helps users explore and achieve their career goals.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
        <p className="text-gray-700">
          Feel free to reach out to us at{" "}
          <a className="text-blue-500" href="ravulachandrashekaryadav@gmail.com">
            ravulachandrashekaryadav@gmail.com
          </a>
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Legal Information</h3>
        <p className="text-gray-700">
          Please review our{' '}
          <a className="text-blue-500" href="/terms-of-service">
            Terms of Service
          </a>{' '}
          and{' '}
          <a className="text-blue-500" href="/privacy-policy">
            Privacy Policy
          </a>
          .
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Social Media</h3>
        <p className="text-gray-700">
          Connect with us on{' '}
          <a
            className="text-blue-500"
            href="https://www.instagram.com/chandrashekarravula/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>{' '}
          and{' '}
          <a
            className="text-blue-500"
            href="https://www.facebook.com/ravula.chandrashekar.7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          .
        </p>
      </section>
    </div>
    <footer className="bg-gray-900 text-white text-center py-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Chandrashekar Ravula &mdash; Career Navigator
        </p>
      </footer>
      </>
  );
};

export default About;
