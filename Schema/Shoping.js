const mongoose = require("mongoose");

const ShoppingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    List: [{
        Product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        },
    }, ],
});

module.exports = WishLists = mongoose.model("Shopping", ShoppingSchema);