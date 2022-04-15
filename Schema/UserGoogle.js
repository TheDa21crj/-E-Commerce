const mongoose = require("mongoose");
const config = require("config");
const jwt = require("jsonwebtoken");

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
    tokens: [{
        token: {
            type: "string",
            required: true,
        },
    }, ],
});

// token
UserGoogleSchema.methods.generateToken = async function() {
    try {
        let token = jwt.sign({ _id: this._id }, config.get("jwtTokenAuth"));
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
};

module.exports = mongoose.model("UserGoogle", UserGoogleSchema);