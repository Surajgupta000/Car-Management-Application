import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthIcon from '../assets/car.png';  // Make sure to update the path to the actual icon

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch products from the server
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleViewListings = () => {
    navigate('/signup');  // Redirect to signup page
  };

  return (
    <div>
      {/* 1. Full Background Image */}
      <div 
        className="relative bg-cover bg-center h-screen" 
        style={{ backgroundImage: 'url("https://via.placeholder.com/1500x1000?text=Car+Image")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
        <div className="relative z-10 text-center text-white px-4 py-16">
          <h2 className="text-4xl font-semibold mb-4">Your Placeholder Heading</h2>
          <p className="text-xl mb-6">This is a placeholder for your paragraph. You can add some description here.</p>
          <button 
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            onClick={handleViewListings}
          >
            View Listings
          </button>
        </div>
      </div>

      {/* 2. Features Section with Cards */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center mb-6">Feature Section Placeholder</h2>
        <p className="text-center mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel risus nulla. Vivamus in nulla ut urna tristique tincidunt a et magna.</p>
        
        {/* Card Section */}
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
              Car Listings
            </h4>
            <img
              src={AuthIcon}  // Replace with relevant image
              alt="Listings Icon"
              className="mx-auto my-4 w-12 h-12"
            />
            <p className="text-gray-700">
              Easily browse through the car listings, filter, and view all the available cars for sale.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex-1 text-center">
            <h4 className="text-xl font-bold text-blue-600">
              Secure Transactions
            </h4>
            <img
              src={AuthIcon}  // Replace with relevant image
              alt="Secure Icon"
              className="mx-auto my-4 w-12 h-12"
            />
            <p className="text-gray-700">
              Enjoy a secure and seamless transaction process, ensuring a smooth car buying experience.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Scrollable Cars Image Section */}
      <div className="relative mx-auto py-16">
        <h2 className="text-3xl font-semibold text-center mb-6">Browse Our Cars</h2>
        <div className="relative flex overflow-x-auto gap-4 pb-4">
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 opacity-50 hover:opacity-100">
            &lt;
          </button>
          <div className="flex space-x-4">
            {/* Placeholder Car Images */}
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="flex-shrink-0 w-48">
                <img 
                  src={`https://via.placeholder.com/300x200?text=Car+${index + 1}`} 
                  alt={`Car ${index + 1}`}
                  className="w-full h-full object-cover rounded-md transition-transform duration-300"
                  style={{
                    transform: index === 4 ? 'scale(1)' : 'scale(0.8)', // Centered image is larger
                  }}
                />
              </div>
            ))}
          </div>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 opacity-50 hover:opacity-100">
            &gt;
          </button>
        </div>
      </div>

      {/* 4. FAQ Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {/* Question 1 */}
          <div className="border p-6 rounded-md relative">
            <p className="text-lg">What is the warranty on the cars?</p>
            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 text-xl">
              +
            </button>
            <div className="mt-4 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </div>
          {/* Question 2 */}
          <div className="border p-6 rounded-md relative">
            <p className="text-lg">Do I need a down payment?</p>
            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 text-xl">
              +
            </button>
            <div className="mt-4 text-sm text-gray-500">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          </div>
          {/* Add more questions as needed */}
        </div>
      </div>

      {/* 5. Product Listings */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-5 rounded-lg shadow-md">
              <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="text-blue-600 mt-4 font-semibold">{`$${product.price}`}</p>
              <button className="w-full py-2 bg-blue-600 text-white rounded-md mt-4 hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
