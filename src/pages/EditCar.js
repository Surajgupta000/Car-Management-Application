import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../api/axios';

const EditCar = () => {
  const { id } = useParams(); // Get car ID from URL
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [brand, setBrand] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`/cars/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTitle(response.data.title);
        setBrand(response.data.brand);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch car details.');
      }
    };

    fetchCar();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        `/cars/${id}`,
        { title, brand },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess('Car updated successfully!');
      setError('');
      navigate('/'); // Redirect to the main page or UserCars list
    } catch (err) {
      console.error(err);
      setError('Failed to update car.');
      setSuccess('');
    }
  };

  return (
    <div>
      <h2>Edit Car</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Brand:</label>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Car</button>
      </form>
    </div>
  );
};

export default EditCar;
