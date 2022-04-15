const express = require("express");
const router = express.Router();
const User = require("./../Schema/UserGoogle");
const config = require("config");
const { check, validationResult } = require("express-validator");
const { OAuth2Client } = require("google-auth-library");
const GoolgeAuth = require("./../middleware/GoolgeAuth");

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
    "/google/login", [
        check("email", "email is Required").not().isEmpty(),
        check("tokenId", "tokenId is Required").not().isEmpty(),
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, tokenId } = req.body;
        try {
            let user = await User.findOne({ email });
            if (user) {
                let token = await user.generateToken();
                res.cookie("jwt", token, {
                    expires: new Date(Date.now() + 360000),
                    httpOnly: true,
                });

                res.status(202).send({ message: `Token = ${token}` });
            } else {
                return res
                    .status(400)
                    .json({ errors: [{ message: "Invalid Credentials" }] });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "error" });
        }
    }
);

router.get("/accountGooge", GoolgeAuth, async(req, res) => {
    res.status(200).send({ message: req.dataUser });
});

module.exports = router;