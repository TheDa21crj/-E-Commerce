const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    username: {
        type: "string",
        required: true,
    },
    password: {
        type: "string",
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = Users = mongoose.model("Admin", AdminSchema);