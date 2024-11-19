import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';  // Adjust path if needed

const CarDetail = () => {
  const { id } = useParams(); // Get car ID from URL
  const [car, setCar] = useState(null);
  const [error, setError] = useState('');

  // Fetch car details when the component mounts or the car ID changes
  useEffect(() => {
    const fetchCar = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('Unauthorized. Please log in.');
          return;
        }
        
        const response = await axios.get(`/cars/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        
        setCar(response.data);  // Set the car details in state
      } catch (err) {
        console.error(err);
        setError('Failed to fetch car details.');
      }
    };

    fetchCar();
  }, [id]);  // Re-run effect if car ID changes

  if (error) return <p>{error}</p>;
  if (!car) return <p>Loading car details...</p>;

  return (
    <div className="car-detail-container">
      <h2>{car.title}</h2>
      <p><strong>Brand:</strong> {car.brand}</p>
      <p><strong>Owner:</strong> {car.owner.name}</p>
      <p><strong>Created At:</strong> {new Date(car.createdAt).toLocaleString()}</p>
      
      {/* Optional: Display car image if available */}
      {car.imageUrl && <img src={car.imageUrl} alt={car.title} className="car-image" />}
    </div>
  );
};

export default CarDetail;
