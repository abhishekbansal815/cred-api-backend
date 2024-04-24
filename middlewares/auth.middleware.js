const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];

        if (!authHeader) {
            return res.status(401).json({ error: 'Un-Authorized', code: '401' });
        }

        // Extract JWT token from Authorization header
        const bearer = authHeader.split(' ')[0];
        const token = authHeader.split(' ')[1];

        if (bearer != "Bearer") {
            return res.status(401).json({ error: 'Un-Authorized', code: '401' });
        }

        if (!token) {
            return res.status(401).json({ error: 'Un-Authorized', code: '401' });
        }

        // Verify JWT token
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({ error: 'Forbidden', code: '403' });
            }
            // Pass decoded user information to the next middleware or route handler
            req.user = decoded;
            next();
        });
    } catch (error) {
        res.status(500).json({ message: "Could Not Verify Token", error });
    }
};
