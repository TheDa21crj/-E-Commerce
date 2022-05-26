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
router.post(
    "/add", [
        UserAuth,
        check("name", "name is Required").not().isEmpty(),
        check("address", "address is Required").not().isEmpty(),
        check("pinCode", "pinCode is Required").not().isEmpty(),
        check("town", "town is Required").not().isEmpty(),
        check("state", "state is Required").not().isEmpty(),
        check("country", "country is Required").not().isEmpty(),
        check("phoneNumber", "phoneNumber is Required").not().isEmpty(),
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let userID = req.userId;
        const { name, address, pinCode, town, state, country, phoneNumber } =
        req.body;

        console.log(name, address, pinCode, town, state, country, phoneNumber);

        return res.status(200).json({ message: "Hello World!" });
    }
);

module.exports = router;