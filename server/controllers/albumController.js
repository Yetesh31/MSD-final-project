const Album = require('../models/Album');

// Get all albums
exports.getAllAlbums = async (req, res) => {
    try {
        const albums = await Album.find().populate('songs');
        res.json(albums);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching albums', error });
    }
};

// --- Optional: Seed initial data ---
// This is a helper function to populate your database with the initial album data.
exports.seedAlbums = async (req, res) => {
    try {
        // Your albumsData from App.jsx goes here
        const albumsData = [
            // ... copy and paste the full albumsData array here
        ];
        await Album.deleteMany({}); // Clear existing albums
        await Album.insertMany(albumsData);
        res.status(201).send('Database seeded successfully!');
    } catch (error) {
        res.status(500).json({ message: 'Error seeding database', error });
    }
};