const express = require("express");
const router = express.Router();
const auth = require("./../middleware/auth");

//Private | Account | /api/myaccount
router.get("/", auth, (req, res) => {
    res.status(200).send(req.user);
});

module.exports = router;