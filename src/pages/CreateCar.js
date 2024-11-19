import React, { useState } from 'react';
import axios from '../api/axios';

const CreateCar = () => {
  const [title, setTitle] = useState('');
  const [brand, setBrand] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      await axios.post(
        '/cars',
        { title, brand },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess('Car added successfully!');
      setTitle('');
      setBrand('');
    } catch (err) {
      console.error(err);
      setError('Failed to add car. Please try again.');
    }
  };

  return (
    <div>
      <h2>Add a New Car</h2>
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
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default CreateCar;
