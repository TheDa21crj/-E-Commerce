const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const UserAuth = require("./../middleware/UserAuth");
const Order = require("./../Schema/Order");

// Private || See Order || api/Order
router.get("/", UserAuth, async (req, res) => {
  let userID = req.userId;
  if (userID) {
    return res.status(202).send({ message: "Hello World" });
  }
  return res.status(304).send({ message: "Error" });
});

// Private || Add Order || api/Order/add
router.post("/add", UserAuth, async (req, res) => {
  let userID = req.userId;
  if (userID) {
    return res.status(202).send({ message: "Add" });
  }
  return res.status(304).send({ message: "Error" });
});

module.exports = router;
