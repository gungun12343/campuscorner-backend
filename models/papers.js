const mongoose = require("mongoose");

const paperSchema = new mongoose.Schema({
    name: String,
    collegeYear: Number,
    sem: Number,
    branch: String,
    year: String,
    url: String
});

const Paper = mongoose.model("Paper", paperSchema);

module.exports = Paper;