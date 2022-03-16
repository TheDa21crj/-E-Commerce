const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
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
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = Profile = mongoose.model("order", OrderSchema);