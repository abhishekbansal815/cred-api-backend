const dotenv = require('dotenv');
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');
const cors = require("cors");
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require("./ipConfig.json");

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Passport middleware
app.use(passport.initialize());
require('./config/passport')(passport); // Passport configuration

// Other global middlewares
app.use(express.json());
app.use(
    cors({
        origin: `http://${config.ip}:${config.FRONTEND_PORT}`,
        allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept",
        credentials: true,
    })
);

// Routes
app.use('/api/v1', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
