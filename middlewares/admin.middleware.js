require('dotenv').config();

exports.checkAdminKey = (req, res, next) => {
    // Implement logic to check admin key
    const ADMIN_KEY = process.env.ADMIN_KEY;
    if (req.headers["authorization"] === ADMIN_KEY) {
        next();
    } else {
        res.status(401).json({ error: 'Un-Authorized', code: '001' });
    }
};
