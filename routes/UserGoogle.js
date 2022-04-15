const express = require("express");
const router = express.Router();
const User = require("./../Schema/UserGoogle");
const config = require("config");
const { check, validationResult } = require("express-validator");

router.post(
    "/google/register", [
        check("googleId", "googleId is Required").not().isEmpty(),
        check("email", "email is Required").not().isEmpty(),
        check("familyName", "familyName is Required").not().isEmpty(),
        check("givenName", "givenName is Required").not().isEmpty(),
        check("name", "name is Required").not().isEmpty(),
        check("imageUrl", "imageUrl is Required").not().isEmpty(),
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { googleId, email, familyName, givenName, name, imageUrl } = req.body;

        try {
            let user = await User.findOne({ email });

            if (user) {
                return res.status(400).json({ message: `User Already Exists` });
            }

            user = new User({
                googleId,
                email,
                familyName,
                givenName,
                name,
                imageUrl,
            });

            await user.save();
            res.status(202).json({ message: `User Registered` });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error });
        }

        console.log(googleId);
        console.log(email);
        console.log(familyName);
        console.log(givenName);
        console.log(name);
        console.log(imageUrl);
    }
);

router.post(
    "/google/login", [check("email", "email is Required").not().isEmpty()],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email } = req.body;
        try {
            let user = await User.findOne({ email });
            if (user) {
                res.status(202).send({ message: `Token` });
            } else {
                return res
                    .status(400)
                    .json({ errors: [{ message: "Invalid Credentials" }] });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error });
        }
    }
);

module.exports = router;