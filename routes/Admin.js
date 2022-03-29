const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("./../Schema/Users");

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
            if (!userE) {
                return res
                    .status(404)
                    .json({ errors: [{ message: "Invalid Credentials" }] });
            }
            const matchP = await bcrypt.compare(password, userE.password);
            if (!matchP) {
                return res
                    .status(400)
                    .json({ errors: [{ message: "Invalid Credentials" }] });
            }

            const payload = {
                user: {
                    email: userE,
                },
            };

            jwt.sign(
                payload,
                config.get("jwtTokenAuth"), { expiresIn: "360000" },
                (err, token) => {
                    if (err) throw err;
                    res.status(200).json({ token });
                }
            );
            // return res.status(200).json({ message: "Login" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: error });
        }
    }
);

module.exports = router;