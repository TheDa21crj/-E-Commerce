const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("./../middleware/auth");
const CartSchema = require("./../Schema/Cart");
const User = require("./../Schema/Users");

// Private | Cart All Items | api/cart
router.get("/", auth, async(req, res) => {});

// Private | Cart Add | api/cart/add
router.put(
    "/add",
    auth, [check("item", "item name is required")],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { item } = req.body;
        const profileFeilds = {};
        profileFeilds.user = req.user.email._id;
        profileFeilds.carts = {};
        if (item) {
            profileFeilds.carts.item = item;
        }

        try {
            let profile = await CartSchema.findOne({ user: req.user.email._id });
            if (profile) {
                profile.carts.unshift(profileFeilds.carts);
                await profile.save();
                return res.json(profile);
            }

            profile = new CartSchema(profileFeilds);
            await profile.save();
            res.json(profileFeilds);
        } catch (error) {
            console.log(error);
        }
    }
);

module.exports = router;