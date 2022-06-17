const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const Shoping = require("./../Schema/Shoping");
const UserAuth = require("./../middleware/UserAuth");
const Product = require("./../Schema/Products");

// Private || Add Shoping || api/Shoping/add
router.post(
    "/add", [
        UserAuth,
        check("id", "id is Required").not().isEmpty(),
        check("name", "name is Required").not().isEmpty(),
        check("imgSrc", "imgSrc is Required").not().isEmpty(),
        check("price", "price is Required").not().isEmpty(),
        check("qunatity", "qunatity is Required").not().isEmpty(),
        check("size", "size is Required").not().isEmpty(),
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id, name, imgSrc, price, qunatity } = req.body;
        let userID = req.userId;

        let userCheck = await Shoping.findOne({ user: userID });

        if (userCheck) {
            let List = {};
            List.id = id;
            List.name = name;
            List.imageSrc = imgSrc;
            List.price = price;
            List.qunatity = qunatity;
            List.size = size;

            for (let i = 0; i < userCheck.List.length; i++) {
                if (userCheck.List[i].id === id) {
                    return res.status(400).json({ message: "same" });
                }
            }

            // add product
            let add = await Shoping.findOneAndUpdate({ user: userID }, {
                $push: {
                    List: List,
                },
            });
            return res.status(200).json("Added to Shopping Cart");
        } else {
            let Shop = {};
            Shop.user = userID;
            Shop.List = {};
            Shop.List.id = id;
            Shop.List.name = name;
            Shop.List.imageSrc = imgSrc;
            Shop.List.price = price;
            Shop.List.qunatity = qunatity;
            Shop.List.size = size;

            let newShop = new Shoping(Shop);
            await newShop.save();
            return res.status(200).json("Added to Shopping Cart");
        }

        return res.status(202).json({ message: id });
    }
);

// Private || See Shoping || api/Shoping

module.exports = router;