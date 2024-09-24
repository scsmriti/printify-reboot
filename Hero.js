import React from 'react';

const Hero = () => {
  return (
    <section className="bg-blue-500 text-white py-20">
      <div className="container mx-auto text-center px-4 md:px-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to My Website
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Create and sell custom products online with ease
        </p>
        <div className="space-x-0 md:space-x-4 space-y-4 md:space-y-0 flex flex-col md:flex-row justify-center">
          <button className="bg-white text-blue-500 py-2 px-6 rounded-full font-semibold hover:bg-gray-200">
            Get Started
          </button>
          <button className="bg-gray-800 text-white py-2 px-6 rounded-full font-semibold hover:bg-gray-700">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
