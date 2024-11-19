const express = require('express');
const {
  addCar,
  getCars,
  searchCars,
  getCarById,
  updateCar,
  deleteCar,
} = require('../controllers/carController');
const auth = require('../middlewares/authMiddleware');
const upload = require('../middlewares/uploadMiddleware');


const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Cars
 *   description: Car management
 */

/**
 * @swagger
 * /api/cars:
 *   post:
 *     summary: Add a new car with images
 *     tags: [Cars]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the car
 *                 example: "My First Car"
 *               description:
 *                 type: string
 *                 description: The description of the car
 *                 example: "A red sports car."
 *               tags:
 *                 type: string
 *                 description: Comma-separated tags
 *                 example: "SUV,Ford"
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *                 description: Up to 10 images of the car
 *     responses:
 *       201:
 *         description: Car added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 tags:
 *                   type: array
 *                   items:
 *                     type: string
 *                 images:
 *                   type: array
 *                   items:
 *                     type: string
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.post('/', auth, upload.array('images', 10), addCar);

/**
 * @swagger
 * /api/cars:
 *   get:
 *     summary: Get all cars for the logged-in user
 *     tags: [Cars]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of cars
 *       401:
 *         description: Unauthorized
 */
router.get('/', auth, getCars);

/**
 * @swagger
 * /api/cars/search:
 *   get:
 *     summary: Search cars by keyword
 *     tags: [Cars]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: keyword
 *         in: query
 *         required: true
 *         description: Search keyword
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of cars matching the search
 *       401:
 *         description: Unauthorized
 */
router.get('/search', auth, searchCars);

/**
 * @swagger
 * /api/cars/{id}:
 *   get:
 *     summary: Get car by ID
 *     tags: [Cars]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Car ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Car details
 *       404:
 *         description: Car not found
 */
router.get('/:id', auth, getCarById);

/**
 * @swagger
 * /api/cars/{id}:
 *   put:
 *     summary: Update a car
 *     tags: [Cars]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Car ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the car
 *                 example: "My First Car"
 *               description:
 *                 type: string
 *                 description: The description of the car
 *                 example: "A red sports car."
 *               tags:
 *                 type: string
 *                 description: Comma-separated tags
 *                 example: "SUV,Ford"
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *                 description: Up to 10 images of the car
 *     responses:
 *       200:
 *         description: Car updated successfully
 *       404:
 *         description: Car not found
 */
router.put('/:id', auth, upload.array('images', 10), updateCar);

/**
 * @swagger
 * /api/cars/{id}:
 *   delete:
 *     summary: Delete a car
 *     tags: [Cars]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Car ID
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Car deleted successfully
 *       404:
 *         description: Car not found
 */
router.delete('/:id', auth, deleteCar);

module.exports = router;
