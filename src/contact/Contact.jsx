import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-1 flex justify-center items-center p-6 mt-20">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-8">
          <h1 className="text-3xl font-bold text-gray-9 mb-4 text-center">Contact Us</h1>
          <p className="text-gray-600 mb-8 text-center">
            We’d love to hear from you! Please fill out the form below to get in touch with us.
          </p>

          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green sm:text-sm bg-white"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green sm:text-sm bg-white"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows="6"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green sm:text-sm bg-white"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green text-white py-3 px-6 rounded-lg shadow-md hover:bg-black focus:outline-none focus:ring-2 "
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
