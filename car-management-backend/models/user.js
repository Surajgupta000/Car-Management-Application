const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    trim: true, 
    match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, // Email format validation
  },
  password: { 
    type: String, 
    required: true, 
    minlength: 6, // Minimum password length
  },
});

// Pre-save middleware for password hashing
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Check if model is already defined to avoid overwriting
module.exports = mongoose.models.User || mongoose.model('User', userSchema);
