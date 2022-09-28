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
router.post(
  "/add",
  [
    UserAuth,
    check("id", "id is Required").not().isEmpty(),
    check("price", "price is Required").not().isEmpty(),
    check("qunatity", "qunatity is Required").not().isEmpty(),
    check("size", "size is Required").not().isEmpty(),
    check("imageSrc", "imageSrc is Required").not().isEmpty(),
    check("name", "name is Required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let userID = req.userId;

    const { id, price, qunatity, size, imageSrc, name } = req.body;
    if (userID) {
      let userCheck = await WishList.findOne({ user: userID });

      if (userCheck) {
      } else {
        let order = {};
        order.user = userID;
        order.List = {};
        order.List.id = id;
        order.List.name = name;
        order.List.imageSrc = imageSrc;
        order.List.price = price;
        order.List.qunatity = qunatity;
        order.List.size = size;
      }

      return res.status(202).send({ message: id });
    }
    return res.status(304).send({ message: "Error" });
  }
);

module.exports = router;
