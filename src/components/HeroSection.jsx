import React from 'react';

const HeroSection = ({ openModal }) => {
  return (
    <section className="bg-blue-50 py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-4">Let's Learn & Earn</h1>
          <p className="text-lg mb-8">Get a chance to win up to Rs. 15,000</p>
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold"
            onClick={openModal}
          >
            Refer Now
          </button>
        </div>
        {/* <img src="/path/to/your/image.jpg" alt="Hero Image" className="mt-8" /> */}
      </div>
    </section>
  );
};

export default HeroSection;
