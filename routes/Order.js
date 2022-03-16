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

// Private | Add Order | api/order/add
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
        profileFeilds.user = req.user.email._id;
        profileFeilds.orders = {};
        if (order) {
            profileFeilds.orders.order = order;
        }
        try {
            let profile = await UserOrder.findOne({ user: req.user.email._id });
            if (profile) {
                profile.orders.unshift(profileFeilds.orders);
                await profile.save();
                return res.json(profile);
            }

            profile = new UserOrder(profileFeilds);
            await profile.save();
            res.json(profileFeilds);
        } catch (error) {
            console.log(error);
        }
    }
);

module.exports = router;