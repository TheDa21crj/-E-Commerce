const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("./../Schema/Users");
const auth = require("./../middleware/auth");

//Private | Account | /api/myaccount
router.get("/", auth, (req, res) => {
    res.status(200).send({ message: `My Account` });
    console.log(`req.user`);
    console.log(req.user);
});

module.exports = router;