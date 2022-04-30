const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const WishList = require("./../Schema/WishList");
const UserAuth = require("./../middleware/UserAuth");
const Product = require("./../Schema/Products");

router.post(
    "/add", [
        // UserAuth,
        check("id", "id is Required").not().isEmpty(),
        check("quantity", "quantity is Required").not().isEmpty(),
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { id, quantity } = req.body;
        try {
            // const profile = await WishList.findOne({ user: req.user.id });
            let productExists = await Product.findOne({ _id: id });
            if (!productExists) {
                return res.status(404).json({ errors: "error" });
            }
            res.status(200).json({ message: productExists });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error });
        }
    }
);

module.exports = router;