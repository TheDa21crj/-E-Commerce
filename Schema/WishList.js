const mongoose = require("mongoose");

const WishListSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    wishlists: [{
        wishlist: {
            type: "string",
        },
        date: {
            type: Date,
            default: Date.now,
        },
    }, ],
});

module.exports = WishList = mongoose.model("WishList", WishListSchema);