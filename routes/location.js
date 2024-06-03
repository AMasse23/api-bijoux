const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');
const userController = require('../controllers/userController');


/**
 * @openapi
 * /location:
 *   get:
 *     tags:
 *       - Locations
 *     summary: Get all locations from connected user
 *     security:
 *       - bearerAuth: []
 *     description: Get all locations from connected user
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', userController.authenticateToken, locationController.getLocations);


/**
 * @openapi
 * /location:
 *   post:
 *     tags:
 *       - Locations
 *     summary: Create a location
 *     security:
 *      - bearerAuth: []
 *     description: Create a location
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               dateDebutLocation:
 *                 type: 'string'
 *                 format: 'date-time'
 *               dateFinLocation:
 *                 type: 'string'
 *                 format: 'date-time'
 *               idBijou:
 *                 type: 'integer'
 *             required:
 *               - dateDebutLocation
 *               - dateFinLocation
 *               - idBijou
 *     responses:
 *       200:
 *         description: Success
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */
router.post('/', userController.authenticateToken, locationController.createLocation);

module.exports = router;