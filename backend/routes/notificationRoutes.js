const express = require('express');
const notificationController = require('../controllers/notificationController');

const router = express.Router();

// Get notifications for a user
router.get('/:userId', notificationController.getNotifications);

// Mark a notification as read
router.put('/:notificationId/read', notificationController.markAsRead);

module.exports = router;