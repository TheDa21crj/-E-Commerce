const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("./../middleware/auth");
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
        const data = await User.findOne({ orders });
        res.send(data);
    }
);

module.exports = router;