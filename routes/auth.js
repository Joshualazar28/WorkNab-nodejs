/**
 * User auth routes
 * @author Joshua Lazar
 */
const router = require('express').Router();
const auth = require('../controllers/auth');
const { checkAuth } = require('../middleware/checkAuth');
const { validateLogin, isValidated, changePasswordValidate } = require('../middleware/validators');

/**
 * ////////////////////////// Routes /////////////////////////
 * @method post user login
 * @method get check auth
 * @method put change password
 * @method post forgot email
 */

// Read
router.post('/login', validateLogin, isValidated, auth.login); // Get all users at once
router.get('/', checkAuth, auth.confirmAuth);
router.put(
  '/password/:userId',
  checkAuth,
  changePasswordValidate,
  isValidated,
  auth.changePassword,
); // Change password route
router.put('/forgot/:email', auth.forgot);

// Export
module.exports = router;
