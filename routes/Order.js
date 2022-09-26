const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const UserAuth = require("./../middleware/UserAuth");

// Private || See Shoping || api/Shoping
router.get("/", UserAuth, async (req, res) => {
  let userID = req.userId;
  try {
    let userCheck = await Shoping.findOne({ user: userID });
    if (userCheck) {
      return res.status(200).json({ message: userCheck.List });
    } else {
      return res.status(200).json({ message: "zero" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

module.exports = router;
