import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './components/Products';
import Portfolio from './pages/portfolio';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CarDetails from './pages/CarDetail';
import CreateCar from './pages/CreateCar';
import EditCar from './pages/EditCar';
import AddCar from './pages/Addcar';
import UserCars from './pages/UserCars';
import CarsList from './pages/carsList'; // Assuming the correct component name is CarsList

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/portfolio/:id" element={<CarDetails />} />
        <Route path="/user-cars" element={<UserCars />} />
        <Route path="/edit-car/:id" element={<EditCar />} />
        <Route path="/create-car/:id" element={<CreateCar />} />
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/cars" element={<CarsList />} /> {/* Use the correct component here */}
      </Routes>
    </Router>
  );
};

export default App;
