const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const Products = require("./../Schema/Products");

// Private || Add Products || /api/admin/Products || Admin Only
router.post(
    "/", [
        check("name", "name is Required").not().isEmpty(),
        check("imageSrc", "imageSrc is Required").not().isEmpty(),
        check("des", "des is Required").not().isEmpty(),
        check("rating", "rating is Required").not().isEmpty(),
        check("NumReview", "NumReview is Required").not().isEmpty(),
        check("price", "price is Required").not().isEmpty(),
        check("gender", "gender is Required").not().isEmpty(),
        check("category", "category is Required").not().isEmpty(),
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;

        res.status(200).send({ message: "Hello" });
    }
);

module.exports = router;