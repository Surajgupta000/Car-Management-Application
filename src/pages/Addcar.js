import React, { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

const AddCar = () => {
    const navigate = useNavigate(); 
  const [car, setCar] = useState({
    title: '',
    brand: '',
    owner: '',
    createdAt: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCar({
      ...car,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        '/cars',
        car,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      navigate('/cars');  // Redirect to the cars list page
    } catch (err) {
      console.error(err);
      setError('Failed to add the car.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center text-gray-700">Add New Car</h2>
      {error && <div className="text-red-600 text-center">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-600">Car Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={car.title}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="brand" className="block text-sm font-medium text-gray-600">Car Brand</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={car.brand}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="owner" className="block text-sm font-medium text-gray-600">Owner Name</label>
          <input
            type="text"
            id="owner"
            name="owner"
            value={car.owner}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="createdAt" className="block text-sm font-medium text-gray-600">Created At</label>
          <input
            type="datetime-local"
            id="createdAt"
            name="createdAt"
            value={car.createdAt}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full py-2 px-4 rounded-lg bg-blue-500 text-white font-semibold ${loading && 'opacity-50'}`}
          disabled={loading}
        >
          {loading ? 'Adding Car...' : 'Add Car'}
        </button>
      </form>
    </div>
  );
};

export default AddCar;
