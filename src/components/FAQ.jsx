// components/FAQ.js
import React from "react";

const FAQ = () => {
  return (
    <section className="py-8" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <div className="bg-white shadow rounded-lg p-6">
          <div className="mb-4">
            <h3 className="text-lg font-medium">
              Do I need to have prior Product Management and Project Management
              experience to enroll in the program?
            </h3>
            <p className="mt-2 text-gray-600">
              No, the program is designed to include individuals of all levels
              of experience. All topics will be covered from the basics, making
              it suitable for individuals from any field of work.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium">
              What is the minimum system configuration required?
            </h3>
            <p className="mt-2 text-gray-600">
              Please refer to the detailed system requirements on our website.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
