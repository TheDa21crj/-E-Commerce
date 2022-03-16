const express = require("express");
const router = express.Router();
const auth = require("./../middleware/auth");

//Private | MY orders | /api/myrders
router.get("/", auth, (req, res) => {
    res.status(200).send(req.user);
    // console.log(`req.user`);
    // console.log(req.user);
});

module.exports = router;