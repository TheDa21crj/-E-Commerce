const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const Products = require("./../Schema/Products");

router.get(
    "/", [
        check("name", "name is Required").not().isEmpty(),
        check("imageSrc", "imageSrc is Required").not().isEmpty(),
        check("rating", "rating is Required").not().isEmpty(),
        check("NumReview", "NumReview is Required").not().isEmpty(),
        check("price", "price is Required").not().isEmpty(),
        check("category", "category is Required").not().isEmpty(),
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        res.status(200).send({ message: "Hello" });
    }
);

module.exports = router;