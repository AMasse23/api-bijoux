const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
/**
 * @openapi
 * /user:
 *   get:
 *     tags:
 *       - User
 *     summary: Retrieve a list of users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   role:
 *                     type: string
 *             required:
 *               - id
 *               - name
 *               - role
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */
router.get('/', userController.authenticateToken, (req, res) => res.json(userController.getUsers()));

/**
 * @openapi
 * /user/login:
 *   post:
 *     tags:
 *       - User
 *     summary: Login to the application
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: Login successful
 */
router.post('/login', userController.login);


/**
 * @openapi
 * /user:
 *   patch:
 *     tags:
 *       - User
 *     summary: Update a user
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: User updated
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */
router.patch('/', userController.authenticateToken, userController.updateUser)
module.exports = router;