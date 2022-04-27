const mongoose = require("mongoose");
const config = require("config");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
    email: {
        type: "string",
        required: true,
    },
    password: {
        type: "string",
        required: true,
    },
    avatar: {
        type: "string",
    },
    tokens: [{
        token: {
            type: "string",
            required: true,
        },
    }, ],
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = Users = mongoose.model("User", UserSchema);