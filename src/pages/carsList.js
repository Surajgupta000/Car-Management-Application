import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

const CarsList = () => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/cars', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCars(response.data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch cars.');
      }
    };
    fetchCars();
  }, []);

  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700">Cars List</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Brand</th>
            <th className="border px-4 py-2">Owner</th>
            <th className="border px-4 py-2">Created At</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car._id}>
              <td className="border px-4 py-2">{car.title}</td>
              <td className="border px-4 py-2">{car.brand}</td>
              <td className="border px-4 py-2">{car.owner}</td>
              <td className="border px-4 py-2">{new Date(car.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarsList;
