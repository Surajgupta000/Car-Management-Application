// src/components/PortfolioGallery.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const portfolioItems = [
  { id: 1, title: 'Car Model A', imageUrl: 'https://via.placeholder.com/300x200' },
  { id: 2, title: 'Car Model B', imageUrl: 'https://via.placeholder.com/300x200' },
  { id: 3, title: 'Car Model C', imageUrl: 'https://via.placeholder.com/300x200' },
  { id: 4, title: 'Car Model D', imageUrl: 'https://via.placeholder.com/300x200' },
  { id: 5, title: 'Car Model E', imageUrl: 'https://via.placeholder.com/300x200' },
  { id: 6, title: 'Car Model F', imageUrl: 'https://via.placeholder.com/300x200' },
  { id: 7, title: 'Car Model G', imageUrl: 'https://via.placeholder.com/300x200' },
  { id: 8, title: 'Car Model H', imageUrl: 'https://via.placeholder.com/300x200' },
  { id: 9, title: 'Car Model I', imageUrl: 'https://via.placeholder.com/300x200' },
  { id: 10, title: 'Car Model J', imageUrl: 'https://via.placeholder.com/300x200' },
  { id: 11, title: 'Car Model K', imageUrl: 'https://via.placeholder.com/300x200' },
  { id: 12, title: 'Car Model L', imageUrl: 'https://via.placeholder.com/300x200' },
];

const PortfolioGallery = () => {
    const navigate = useNavigate();
  
    const handleViewDetails = (id) => {
      navigate(`/portfolio/${id}`);
    };
  
    return (
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold text-center mb-8">Portfolio Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <button
                  onClick={() => handleViewDetails(item.id)}
                  className="w-full py-2 bg-blue-600 text-white rounded-md mt-4 hover:bg-blue-700"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
export default PortfolioGallery;
