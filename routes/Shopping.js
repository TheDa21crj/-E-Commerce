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
        // check("id", "id is Required").not().isEmpty(),
        // check("name", "name is Required").not().isEmpty(),
        // check("imgSrc", "imgSrc is Required").not().isEmpty(),
        // check("price", "price is Required").not().isEmpty(),
    ],
    async(req, res) => {
        return res.status(202).json({ message: "Hello Server" });
    }
);

// Private || See Shoping || api/Shoping

module.exports = router;