const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    name: String,
    year: Number,
    sem: Number,
    branch: String,
    code: String,
    url: [String]
})

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;