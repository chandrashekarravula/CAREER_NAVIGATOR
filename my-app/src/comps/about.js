import React from 'react';

const About = () => {
   
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-gray-600 mb-8">Welcome to our web application!</p>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
        <p className="text-gray-700">
          Explain the mission and goals of your organization or project.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Our Team</h3>
        <p className="text-gray-700">
          Introduce the key members of your team and their roles.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
        <p className="text-gray-700">
          Feel free to reach out to us at{' '}
          <a className="text-blue-500" href="mailto:info@example.com">
            davoodshaik43@gmail.com
          </a>
          .
        </p>
      </section>

      {/* Add more sections as needed, such as History, Technology Stack, FAQs, etc. */}

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
            href="https://twitter.com/example"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>{' '}
          and{' '}
          <a
            className="text-blue-500"
            href="https://www.facebook.com/example"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          .
        </p>
      </section>

      {/* Add an Acknowledgments or Credits section if needed. */}
    </div>
  );
};

export default About;
