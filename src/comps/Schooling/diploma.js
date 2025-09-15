import React from 'react';

const DiplomaCourse = () => {
  return (
    <>
    <div className="flex text-black text-center">
      {/* Text on the left */}
      <div className="flex-1 text-left pr-8 pl-4 pt-4 ml-4 mt-10">
        <h2 className="text-3xl font-bold mb-4">Diploma Courses</h2>
        <h3 className="text-lg">Specialize in specific fields through diploma programs.</h3>
        <p className="text-lg mb-4">
          Diploma courses provide specialized training in various fields, preparing students for specific careers and industries. These programs offer practical knowledge and skills relevant to the chosen field, making graduates highly employable.
        </p>
        <h4 className="text-xl font-semibold mb-2">Diploma in Digital Marketing</h4>
        <p className="text-lg mb-4">
          Learn digital marketing strategies including SEO, social media marketing, content marketing, and email marketing to excel in the online advertising landscape.
        </p>
        <h4 className="text-xl font-semibold mb-2">Diploma in Graphic Design</h4>
        <p className="text-lg mb-4">
          Master graphic design software and techniques including layout design, typography, image editing, and logo design to create visually appealing content.
        </p>
        <h4 className="text-xl font-semibold mb-2">Diploma in Computer Engineering</h4>
        <p className="text-lg mb-4">
          Gain expertise in computer hardware, software development, network administration, and system analysis to pursue a career in the IT industry.
        </p>
        <h4 className="text-xl font-semibold mb-2">Diploma in Event Management</h4>
        <p className="text-lg mb-4">
          Learn event planning, budgeting, marketing, and coordination to organize successful events such as conferences, weddings, and corporate gatherings.
        </p>
        <h4 className="text-xl font-semibold mb-2">Diploma in Photography</h4>
        <p className="text-lg mb-4">
          Develop skills in photography techniques, lighting, composition, and post-processing to capture captivating images and pursue a career as a professional photographer.
        </p>
        <h4 className="text-xl font-semibold mb-2">Commerce Diploma courses</h4>
        <p className="text-lg mb-4">
          Explore various aspects of commerce including accounting, finance, business management, and economics to build a strong foundation for a career in business and finance.
        </p>
        <h4 className="text-xl font-semibold mb-2">Diploma in Electrical Engineering</h4>
        <p className="text-lg mb-4">
          Learn about electrical circuits, power systems, electronics, and instrumentation to work in industries related to power generation, transmission, and distribution.
        </p>
        <h4 className="text-xl font-semibold mb-2">Diploma in Mechatronics</h4>
        <p className="text-lg mb-4">
          Integrate mechanical engineering, electronics, computer science, and control engineering to design and develop automated systems and products.
        </p>
        <h4 className="text-xl font-semibold mb-2">Diploma in Hotel Management</h4>
        <p className="text-lg mb-4">
          Acquire skills in hotel operations, food and beverage management, guest services, and hospitality marketing to pursue a career in the hospitality industry.
        </p>
        <h4 className="text-xl font-semibold mb-2">Diploma in Food Technology</h4>
        <p className="text-lg mb-4">
          Learn about food processing, preservation, quality control, and safety regulations to work in food manufacturing, research, and development.
        </p>
        <h4 className="text-xl font-semibold mb-2">Diploma in Agriculture</h4>
        <p className="text-lg mb-4">
          Gain knowledge in agricultural practices, crop production, soil management, and agribusiness to contribute to sustainable agriculture and rural development.
        </p>
        <h4 className="text-xl font-semibold mb-2">Diploma in Fine Arts</h4>
        <p className="text-lg mb-4">
          Explore various forms of visual arts including drawing, painting, sculpture, and printmaking to express creativity and pursue a career in the art industry.
        </p>
        <h4 className="text-xl font-semibold mb-2">Diploma in Radiological Therapy</h4>
        <p className="text-lg mb-4">
          Learn about radiation oncology, medical imaging techniques, patient care, and treatment planning to work as a radiological therapist in cancer treatment centers.
        </p>
        <h4 className="text-xl font-semibold mb-2">Diploma in Biotechnology</h4>
        <p className="text-lg mb-4">
          Study molecular biology, genetics, bioinformatics, and bioprocess engineering to pursue a career in biopharmaceuticals, agriculture, or medical research.
        </p>
        <h4 className="text-xl font-semibold mb-2">Diploma in Entrepreneurship</h4>
        <p className="text-lg mb-4">
          Develop entrepreneurial skills including business planning, marketing, financial management, and innovation to start and manage successful ventures.
        </p>
        <h4 className="text-xl font-semibold mb-2">Diploma in Fashion Designing</h4>
        <p className="text-lg mb-4">
          Learn fashion design principles, garment construction techniques, textile science, and fashion illustration to create innovative and stylish clothing designs.
        </p>
        <h4 className="text-xl font-semibold mb-2">Diploma in Nursing</h4>
        <p className="text-lg mb-4">
          Gain expertise in patient care, medical procedures, nursing ethics, and healthcare management to work as a registered nurse in hospitals, clinics, or community health settings.
        </p>
        <h4 className="text-xl font-semibold mb-2">Diploma in Journalism and Mass Communication</h4>
        <p className="text-lg mb-4">
          Develop journalism skills including news reporting, writing, editing, and multimedia production to work in print, broadcast, or digital media organizations.
        </p>
      </div>

      {/* Image on the right */}
      <div className="text-black text-right mt-28 mr-6">
        <img
          src={process.env.PUBLIC_URL + '/ii4.jpeg'}
          alt="Diploma Course Image"
          className="float-right mb-4 border border-black rounded-md"
          style={{ width: '1000px', height: '400px' }}
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

export default DiplomaCourse;
