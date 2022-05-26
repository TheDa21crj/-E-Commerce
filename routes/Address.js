const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const Address = require("./../Schema/Address");
const UserAuth = require("./../middleware/UserAuth");
const UserSchema = require("./../Schema/User");

// Private || Add Address || api/address/add
router.post("/add", [], async(req, res) => {
    return res.status(200).json({ message: "Hello World!" });
});