const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes'); // Ensure the path is correct
const carRoutes = require('./routes/carRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger');
const path = require('path');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors())
// Middleware
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/cars', carRoutes);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// Database Connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('Missing MONGO_URI in environment variables');
  process.exit(1);
}

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });
