const mongoose = require('mongoose');
const SongSchema = require('./Song').schema;

const AlbumSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    coverUrl: { type: String, required: true },
    songs: [SongSchema]
});

module.exports = mongoose.model('Album', AlbumSchema);