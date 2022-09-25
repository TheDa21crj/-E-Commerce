const express = require("express");
const app = express();
const config = require("config");
const StripeKey = config.get("Stripe");
const ClientURl = config.get("ClientURl");
const Stripe = require("stripe");
const router = express.Router();

const stripe = require("stripe")(StripeKey);

router.post("/checkout", async (req, res) => {
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
});

module.exports = router;
