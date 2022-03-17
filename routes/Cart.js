const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("./../middleware/auth");
const User = require("./../Schema/Users");

// Private | Add wishlists | api/wishlist/add
router.put(
    "/add",
    auth, [check("wishlist", "wishlist name is required")],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { wishlist } = req.body;
        const profileFeilds = {};
        profileFeilds.user = req.user.email._id;
        profileFeilds.wishlists = {};
        if (wishlist) {
            profileFeilds.wishlists.wishlist = wishlist;
        }

        try {
            let profile = await WishListSchema.findOne({ user: req.user.email._id });
            if (profile) {
                profile.wishlists.unshift(profileFeilds.wishlists);
                await profile.save();
                return res.json(profile);
            }
            profile = new WishListSchema(profileFeilds);
            await profile.save();
            res.json(profileFeilds);
        } catch (error) {
            console.log(error);
        }
    }
);

module.exports = router;