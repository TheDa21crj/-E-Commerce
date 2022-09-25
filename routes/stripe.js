const express = require("express");
const app = express();
const { check, validationResult } = require("express-validator");
const config = require("config");
const StripeKey = config.get("Stripe");
const ClientURl = config.get("ClientURl");
const Stripe = require("stripe");
const router = express.Router();
const UserAuth = require("./../middleware/UserAuth");

const stripe = require("stripe")(StripeKey);

router.post(
  "/checkout",
  [
    UserAuth,
    check("dataItems", "dataItems is Required").not().isEmpty(),
    // check("name", "name is Required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { dataItems } = req.body;
    // console.table(dataItems);

    let line_items = [];

    dataItems.forEach((e) => {
      var price_data = {};

      console.log(e.name);
      console.log(e.price);
      console.log(e.qunatity);
    });

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "T-shirt",
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],

      mode: "payment",
      success_url: `${ClientURl}/checkout-success`,
      cancel_url: `${ClientURl}/ShopCart`,
    });

    res.send({ url: session.url });
  }
);

module.exports = router;
