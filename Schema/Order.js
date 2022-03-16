const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    orders: [{
        order: {
            type: "string",
        },
        date: {
            type: Date,
            default: Date.now,
        },
    }, ],
});

module.exports = Order = mongoose.model("order", OrderSchema);