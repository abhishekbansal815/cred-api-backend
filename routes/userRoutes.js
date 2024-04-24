const express = require('express');
const router = express.Router();
// const passport = require('passport');
const userController = require('../controllers/userController');
const { userValidationSchema } = require('../validations/userValidation');
const { validateSchema } = require('../middlewares/validate.middleware');
const { checkAdminKey } = require('../middlewares/admin.middleware');

const validateUser = validateSchema(userValidationSchema);

router.post('/users', checkAdminKey, validateUser, userController.signupUser);

module.exports = router;
