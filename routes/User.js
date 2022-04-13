const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("./../Schema/User");
const UserAuth = require("./../Schema/UserAuth");

// Public | User Register | /api/register
router.post(
    "/register", [
        check("email", "email is Required").not().isEmpty(),
        check("password", "Password is Required").not().isEmpty(),
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        try {
            let user = await User.findOne({ email });

            if (user) {
                return res.status(400).json({ message: `User Already Exists` });
            }
            console.log(req.body);

            user = new User({
                email,
                password,
            });

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            await user.save();
            res.status(202).json({ message: `User Registered` });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error });
        }
    }
);

// Public | User Login | /api/login
router.post(
    "/login", [
        check("email", "email is Required").not().isEmpty(),
        check("password", "Password is Required").not().isEmpty(),
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        try {
            let userE = await User.findOne({ email });
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

            let token = await userE.generateToken();
            res.cookie("jwtTokenUser", token, {
                expires: new Date(Date.now() + 360000),
                httpOnly: true,
            });
            res.status(202).send({ message: `Token = ${token}` });
        } catch (error) {
            console.log(error);
        }
    }
);

router.get("/account", UserAuth, async(req, res) => {
    res.status(200).send({ message: req.dataUser });
});

module.exports = router;