const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    Produt: [{
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

module.exports = Orders = mongoose.model("Order", OrderSchema);