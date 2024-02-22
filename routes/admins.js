/**
 * User CRUD routes
 * @author Joshua Lazar
 */
const router = require('express').Router();
const admins = require('../controllers/admins');
const { checkAuth} = require('../middleware/checkAuth');
const {  checkAdminAuth } = require('../middleware/adminAuth');
const { upload } = require('../middleware/multer');
const { validateAdmin,validateAdminUpdate,  isValidated } = require('../middleware/validators');

/**
 * ////////////////////////// Routes /////////////////////////
 * @method post admins signup
 * @method get get all adminss
 * @method get get admins by id
 * @method put update admins
 * @method delete delete admins
 */

// Create - admins Signup
router.post('/', upload.single('image'),checkAdminAuth, validateAdmin, isValidated, admins.create);

// Read
router.get('/', checkAdminAuth, admins.getAll); // Get all users at once
router.get('/:adminId', checkAdminAuth, admins.getById); // Get one user by it's id

// Update
router.put('/:adminId', checkAuth, validateAdminUpdate, isValidated, admins.update); // Update a specific user by it's id

// Delete
router.delete('/:userId', checkAuth, admins.delete); // delete a specific user by it's id

// Export
module.exports = router;
