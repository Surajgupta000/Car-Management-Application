import React from "react";
import { Link } from "react-router-dom";
import CarImage from "../assets/car-image.jpeg"; // Ensure the image exists
import AuthIcon from "../assets/car.png";
import ListingIcon from "../assets/lock.png";
import SearchIcon from "../assets/search.png";
import ContactImage from "../assets/contact.jpeg"; // Import the contact image
//import Products from "../components/Products"; //this is comment out because i will use it in future ..

const Home = () => {
  return (
    <div>
      {/* Showcase Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-100">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Showcase Your Cars in Style
          </h2>
          <p className="text-gray-700">
            Your platform for car management, featuring easy uploads, secure
            transactions, and detailed listings.
          </p>
          <Link to="/login">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </Link>
        </div>

        {/* Right Content - Car Image */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src={CarImage}
            alt="Car"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          <h3 className="text-2xl font-semibold text-center text-gray-900">
            Key Features
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-start gap-6">
            {/* Card 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex-1 text-center">
              <h4 className="text-xl font-bold text-blue-600">
                User Authentication
              </h4>
              <img
                src={AuthIcon}
                alt="Authentication Icon"
                className="mx-auto my-4 w-12 h-12"
              />
              <p className="text-gray-700">
                Securely sign up and log in to manage your car listings. Protect
                your data with robust authentication mechanisms.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex-1 text-center">
              <h4 className="text-xl font-bold text-blue-600">
                Comprehensive Car Listings
              </h4>
              <img
                src={ListingIcon}
                alt="Listings Icon"
                className="mx-auto my-4 w-12 h-12"
              />
              <p className="text-gray-700">
                Easily add and manage car listings with up to 10 images,
                detailed descriptions, and customizable tags for better
                organization.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex-1 text-center">
              <h4 className="text-xl font-bold text-blue-600">
                Advanced Search
              </h4>
              <img
                src={SearchIcon}
                alt="Search Icon"
                className="mx-auto my-4 w-12 h-12"
              />
              <p className="text-gray-700">
                Quickly find specific car listings using our powerful search
                feature that filters by title, description, and tags.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="flex flex-col md:flex-row items-center p-8 bg-gray-50">
        {/* Image Section */}
        <div className="md:w-2/5 mb-6 md:mb-0 md:pr-8">
          <img
            src={ContactImage}
            alt="Contact"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-3/5 space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">Get in Touch</h3>
          <p className="text-gray-700">
            Feel free to contact us if you need any assistance. We'd love to
            hear from you!
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <textarea
              placeholder="Message"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Contact Us
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
