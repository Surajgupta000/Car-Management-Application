const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Correct path


module.exports = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Invalid Token' });
  }

  try {
    console.log(process.env.JWT_SECRET, token);    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.user = await User.findById(decoded.id).select('-password');
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: 'Invalid Token' });
  }
};
