const mongoose = require("mongoose");

const WishListSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    Product: [{
        id: {
            type: "string",
            required: true,
        },
        quantity: {
            type: "number",
            required: true,
        },
    }, ],
});

module.exports = WishLists = mongoose.model("WishList", WishListSchema);