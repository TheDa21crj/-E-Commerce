const mongoose = require("mongoose");
const config = require("config");
const jwt = require("jsonwebtoken");

const ProductSchema = new mongoose.Schema({
    name: {
        type: "string",
        required: true,
    },
    imageSrc: {
        type: "string",
        required: true,
    },
    des: {
        type: "string",
        required: true,
    },
    rating: {
        type: "Number",
        required: true,
        default: 0,
    },
    NumReview: {
        type: "Number",
        required: true,
        default: 0,
    },
    price: {
        type: "Number",
        required: true,
        default: 0,
    },
    gender: {
        type: "string",
        required: true,
    },
    category: {
        type: "string",
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = Users = mongoose.model("Product", ProductSchema);