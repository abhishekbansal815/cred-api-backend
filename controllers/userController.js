const UserService = require('../services/userService');
const UserServiceInstance = new UserService();

exports.signupUser = async (req, res) => {
    try {
        const { user_name, country_code, mobile_number, tc_Enabled } = req.body;

        // Create new user
        const newUser = await UserServiceInstance.createUser(req.body);

        // Generate unique user ID
        const uid = newUser._id;

        // Return response
        return res.status(200).json({
            uid,
            user_name,
            country_code,
            mobile_number,
            tc_Enabled,
            partner_details: {
                partner_name: 'PARTNER_X',
                partner_id: uid
            }
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};