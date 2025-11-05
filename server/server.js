// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected successfully.'))
.catch(err => console.error('MongoDB connection error:', err));


// Basic Route
app.get('/', (req, res) => {
    res.send('Music Player API is running!');
});
// server/server.js

// ... (keep all the existing code above)

// API Routes
const albumRoutes = require('./routes/albums');
app.use('/api/albums', albumRoutes);

// ... (keep the app.listen part at the bottom)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});