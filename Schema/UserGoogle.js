const mongoose = require("mongoose");

const UserGoogleSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true,
    },
    email: {
        type: "string",
        required: true,
    },
    familyName: {
        type: String,
        required: true,
    },
    givenName: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("UserGoogle", UserGoogleSchema);