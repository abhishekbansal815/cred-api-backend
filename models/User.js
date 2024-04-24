const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_name: { type: String, required: true, unique: true },
    country_code: { type: String, required: true },
    mobile_number: { type: String, required: true },
    tc_Enabled: { type: Boolean, required: true }
});

module.exports = mongoose.model('User', userSchema);
