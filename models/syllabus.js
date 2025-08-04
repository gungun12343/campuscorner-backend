const mongoose = require("mongoose");

const syllabusSchema = new mongoose.Schema({
    year: Number,
    sem: Number,
    branch: String,
    url: String
})

const Syllabus = mongoose.model("Syllabus", syllabusSchema);

module.exports = Syllabus;