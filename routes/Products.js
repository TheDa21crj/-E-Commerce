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
        // check("category", "category is Required").not().isEmpty(),
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const {
            name,
            imageSrc,
            des,
            rating,
            NumReview,
            price,
            gender,
            // category
        } = req.body;

        try {
            let imgSrc = await Products.findOne({ imageSrc });

            if (imgSrc) {
                return res.status(400).json({ message: `Product Exists` });
            }
            console.log(req.body);

            let ProductData = new Products({
                name,
                imageSrc,
                des,
                rating,
                NumReview,
                price,
                gender,
                // category,
            });

            await ProductData.save();

            res.status(200).send({ message: "Product Added" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error });
        }
    }
);

module.exports = router;