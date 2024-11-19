import React, { useEffect, useState } from 'react';
import axios from '../api/axios'; // Use centralized Axios instance
import { Link } from 'react-router-dom';

const UserCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve token
        const response = await axios.get('/cars', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCars(response.data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch cars. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this car?')) return;
    try {
      const token = localStorage.getItem('token'); // Retrieve token
      await axios.delete(`/cars/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCars(cars.filter((car) => car._id !== id)); // Remove the deleted car from the state
    } catch (err) {
      console.error(err);
      alert('Failed to delete the car. Please try again.');
    }
  };

  if (loading) return <p>Loading cars...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Cars</h2>
      <Link to="/create-car" style={{ textDecoration: 'none', color: 'blue' }}>
        Add a Car
      </Link>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {cars.map((car) => (
          <li
            key={car._id}
            style={{
              border: '1px solid #ccc',
              margin: '10px 0',
              padding: '10px',
              borderRadius: '5px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>
              <Link to={`/car/${car._id}`} style={{ marginRight: '10px' }}>
                {car.title}
              </Link>
            </span>
            <span>
              <Link
                to={`/edit-car/${car._id}`}
                style={{
                  textDecoration: 'none',
                  color: 'green',
                  marginRight: '10px',
                }}
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(car._id)}
                style={{
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserCars;
