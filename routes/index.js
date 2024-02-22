/**
 * All api routes handles here
 * @author Joshua Lazar
 */
const router = require('express').Router();

// Parent Routes
router.use('/superAdmins', require('./superAdmins')); // All the user routes
router.use('/admins', require('./admins')); // All the user routes
router.use('/auth', require('./auth')); // All the auth routes

// Export
module.exports = router;
