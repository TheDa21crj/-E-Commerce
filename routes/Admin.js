const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("./../Schema/Admin");

// Private| Admin Login| /api/admin/login || Admin ONLY
router.post(
    "/", [
        check("username", "username is Required").not().isEmpty(),
        check("password", "Password is Required").not().isEmpty(),
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { username, password } = req.body;
        try {
            let userE = await User.findOne({ username });
            // res
            //     .status(202)
            //     .send({ message: `Username = ${username} and Password = ${password}` });
            res.status(202).send(userE);
        } catch (error) {
            console.log(error);
        }
    }
);

module.exports = router;