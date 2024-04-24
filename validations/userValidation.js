const Joi = require('joi');

exports.userValidationSchema = Joi.object({
    // Define Joi schema for user validation
    user_name: Joi.string().email({ tlds: { allow: false } }).required(),
    country_code: Joi.number().required(),
    mobile_number: Joi.number().required(),
    tc_enabled: Joi.boolean().required()
});