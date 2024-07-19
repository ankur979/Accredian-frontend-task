import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const ReferralModal = ({ isOpen, closeModal }) => {
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const backend_url = process.env.REACT_APP_BACKEND_URL
      await axios.post(`${backend_url}/api/referrals`, formData);
      alert("Referral submitted successfully");
      closeModal();
    } catch (error) {
      alert("Failed to submit referral");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="bg-white p-6 rounded-lg shadow-lg w-96"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Refer a Friend
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="flex space-x-2 mb-4">
                <div className="w-1/2">
                  <label className="block text-gray-700 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="referrerName"
                    value={formData.referrerName}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700 font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="referrerEmail"
                    value={formData.referrerEmail}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="flex space-x-2 mb-4">
                <div className="w-1/2">
                  <label className="block text-gray-700 font-medium mb-2">
                    Friend's Name
                  </label>
                  <input
                    type="text"
                    name="refereeName"
                    value={formData.refereeName}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700 font-medium mb-2">
                    Friend's Email
                  </label>
                  <input
                    type="email"
                    name="refereeEmail"
                    value={formData.refereeEmail}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Course Interested In
                </label>
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ReferralModal;
