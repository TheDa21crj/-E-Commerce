const mongoose = require("mongoose");

const CartListSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    carts: [{
        item: {
            type: "string",
        },
        date: {
            type: Date,
            default: Date.now,
        },
    }, ],
});

module.exports = WishList = mongoose.model("CartList", CartListSchema);