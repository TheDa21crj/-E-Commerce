const express = require("express");
const router = express.Router();
const auth = require("./../middleware/auth");

// Private | order | api/order
router.post("/order", auth, (req, res) => {
    res.status(200).send(req.user);
});

module.exports = router;