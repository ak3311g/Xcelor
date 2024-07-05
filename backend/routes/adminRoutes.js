// backend/routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middlewares/authMiddleware');
const { getUsers, deleteUser } = require('../controllers/adminController');

router.route('/users').get(protect, admin, getUsers);
router.route('/user/:id').delete(protect, admin, deleteUser);

module.exports = router;
