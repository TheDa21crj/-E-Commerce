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

router.post(
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
        if (order) {
            profileFeilds.order = order;
        }
        try {
            let profile = await UserOrder.findOne({ user: req.user.id });
            if (profile) {
                // profile = await UserOrder.findOneAndUpdate({ user: req.user.id }, { $set: profileFeilds }, { new: true });
                // const result = await UserOrder.updateOne({ _id: data._id }, {
                //     $set: {
                //         des: des,
                //     },
                // });
                // console.log("profileFeilds");

                return res.json(profile.orders);
            }

            // console.log("profileFeilds");
            // profile = new UserOrder(profileFeilds);
            // await profile.save();
            // res.json(profile, profileFeilds);
        } catch (error) {
            console.log(error);
        }
    }
);

module.exports = router;