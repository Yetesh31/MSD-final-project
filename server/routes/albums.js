const express = require('express');
const router = express.Router();
const albumController = require('../controllers/albumController');

router.get('/', albumController.getAllAlbums);
router.post('/seed', albumController.seedAlbums); // Route to seed data

module.exports = router;