const mongoose = require("mongoose");

const ShoppingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    List: [{
        id: {
            type: "string",
            required: true,
        },
        name: {
            type: "string",
            required: true,
        },
        imageSrc: {
            type: "string",
            required: true,
        },
        price: {
            type: "Number",
            required: true,
            default: 0,
        },
    }, ],
});

module.exports = WishLists = mongoose.model("Shopping", ShoppingSchema);