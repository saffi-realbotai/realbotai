const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Routes
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/profile/:id', userController.getUserProfile);
router.put('/profile/:id', userController.updateUserProfile);
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;
