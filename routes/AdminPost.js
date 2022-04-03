const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./../Schema/Admin");

router.post("/post", async(req, res) => {
    res.status(200).send({ message: `Hello World` });
});

module.exports = router;