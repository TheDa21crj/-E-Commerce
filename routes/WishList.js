const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const WishList = require("./../Schema/WishList");

router.get("/", [], async(req, res) => {
    res.status(200).json({ message: "Hello, world!" });
});

module.exports = router;