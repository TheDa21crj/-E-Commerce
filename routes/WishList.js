const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const WishList = require("./../Schema/WishList");
const UserAuth = require("./../middleware/UserAuth");
const Product = require("./../Schema/Products");

// Private || Add WishList || api/Wishlist/add
router.post(
    "/add", [
        UserAuth,
        check("id", "id is Required").not().isEmpty(),
        check("quantity", "quantity is Required").not().isEmpty(),
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { id, quantity } = req.body;
        let userID = req.userId;

        try {
            let userCheck = await WishList.findOne({ user: userID });
            if (userCheck) {
                let products = {};
                products.id = id;
                products.quantity = quantity;

                console.log(userCheck.Product[0].id);

                for (let i = 0; i < userCheck.Product.length; i++) {
                    if (userCheck.Product[i].id == id) {
                        return res.status(400).json({ message: "same" });
                    }
                }

                // add product
                let add = await WishList.findOneAndUpdate({ user: userID }, {
                    $push: {
                        Product: products,
                    },
                });
                return res.status(200).json({ userCheck });
            } else {
                let Wish = {};
                Wish.user = userID;
                Wish.Product = {};
                Wish.Product.id = id;
                Wish.Product.quantity = quantity;

                let newWish = new WishList(Wish);
                await newWish.save();

                return res.status(200).json(Wish);
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error });
        }
    }
);

module.exports = router;