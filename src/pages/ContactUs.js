// src/pages/ContactUs.js
import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Your Name" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Subject</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Subject" />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Your Message" />
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
