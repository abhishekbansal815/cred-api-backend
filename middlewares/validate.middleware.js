exports.validateSchema = (schema) => (req, res, next) => {
    // Validate request body
    const { error } = schema.validate(req.body);
    if (error) {
        res.status(400).json({ error: 'Bad request', code: '400' });
    } else {
        next();
    }
};