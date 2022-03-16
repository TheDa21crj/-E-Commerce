const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("./../middleware/auth");
const UserOrder = require("./../Schema/Order");
const User = require("./../Schema/Users");

// Private | order | api/order
router.get("/", auth, (req, res) => {
    res.status(200).send(req.user);
});

router.put(
    "/add",
    auth, [check("order", "order name is required")],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { order } = req.body;
        const profileFeilds = {};
        profileFeilds.user = req.user.id;
        profileFeilds.orders = {};
        const profileFeilds0 = {};
        if (order) {
            profileFeilds.orders.order = order;
        }
        try {
            let profile = await UserOrder.findOne({ user: req.user.id });
            if (profile) {
                const profile = await UserOrder.findOne({ user: req.user.id });
                profile.orders.unshift(profileFeilds.orders);
                await profile.save();
                return res.json(profile);
            }

            profile = new UserOrder(profileFeilds);
            await profile.save();
            res.json(profile);
        } catch (error) {
            console.log(error);
        }
    }
);

module.exports = router;