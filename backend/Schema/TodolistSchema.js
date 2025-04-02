const mongoose = require("mongoose");

const todolistSchema = new mongoose.Schema({
    isi: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        default: false
    },
    updateAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Todolist", todolistSchema);
