const User = require('../models/User');

class UserService {
    createUser = async (userData) => {
        // Create new user in the database
        const newUser = new User(userData);

        // Save user to database
        return await newUser.save();
    };
}

module.exports = UserService;
