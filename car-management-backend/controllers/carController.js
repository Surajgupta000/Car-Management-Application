const Car = require('../models/car');
const { formatDate } = require('../utils/helper');
exports.addCar = async (req, res) => {
    try {
      const { title, description, tags } = req.body;
      const images = req.files.map((file) => `/uploads/${file.filename}`); // Save image paths
      const car = await Car.create({
        userId: req.user._id,
        title,
        description,
        tags: tags ? tags.split(',') : [], // Convert tags string to array
        images,
      });
      res.status(201).json(car);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

exports.getCars = async (req, res) => {
  const cars = await Car.find({ userId: req.user._id });
  res.json(cars);
};

exports.searchCars = async (req, res) => {
  const { keyword } = req.query;
  const cars = await Car.find({
    $or: [
      { title: new RegExp(keyword, 'i') },
      { description: new RegExp(keyword, 'i') },
      { tags: { $regex: keyword, $options: 'i' } },
    ],
  });
  res.json(cars);
};

exports.getCarById = async (req, res) => {
  const car = await Car.findById(req.params.id);
  if (!car || car.userId.toString() !== req.user._id.toString()) {
    return res.status(404).json({ message: 'Car not found' });
  }
  res.json(car);
};

exports.updateCar = async (req, res) => {
    try {
      const { title, description, tags } = req.body;
      const updates = { title, description, tags: tags ? tags.split(',') : [] };
      if (req.files && req.files.length > 0) {
        updates.images = req.files.map((file) => `/uploads/${file.filename}`);
      }
      const car = await Car.findOneAndUpdate(
        { _id: req.params.id, userId: req.user._id },
        updates,
        { new: true }
      );
      if (!car) return res.status(404).json({ message: 'Car not found' });
      res.json(car);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

exports.deleteCar = async (req, res) => {
  await Car.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
  res.status(204).send();
};
