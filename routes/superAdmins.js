const router = require('express').Router();
const { register, login, confirmAuth, deleteAdmin, getAll } = require('../controllers/superAdmins');
const { checkAdminAuth } = require('../middleware/adminAuth');
const { upload } = require('../middleware/multer');
const { validateSuperAdmin,  validateSuperAdminLogin, isValidated } = require('../middleware/validators');

// Admin Register
router.post('/', upload.single('image') ,validateSuperAdmin, isValidated,  register);
router.post('/login', validateSuperAdminLogin,isValidated, login);
router.get('/auth', checkAdminAuth, confirmAuth);
router.get('/', checkAdminAuth, getAll);
router.delete('/:adminId', checkAdminAuth, deleteAdmin);

module.exports = router;
