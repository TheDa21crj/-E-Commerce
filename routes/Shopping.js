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
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id, name, imgSrc, price } = req.body;
        let userID = req.userId;

        let userCheck = await WishList.findOne({ user: userID });

        console.log(id);
        console.log(name);
        console.log(imgSrc);
        console.log(price);

        return res.status(202).json({ message: id });
    }
);

// Private || See Shoping || api/Shoping

module.exports = router;