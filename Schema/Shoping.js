const mongoose = require("mongoose");

const WishListSchema = new mongoose.Schema({
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

module.exports = WishLists = mongoose.model("WishList", WishListSchema);