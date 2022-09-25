const express = require("express");
const app = express();
const config = require("config");
const db = config.get("Stripe");

const stripe = require("stripe")(
  "sk_test_51Lgt4qSHqT580lQoNjbMWQgcwIZ5Pl2zh9b3oqhW445R6tNof71oWGKwykSSg1YKM9xEG5cFHsXxgv6rcUSYCU1Q00PurK7HR1"
);

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "https://example.com/success",
    cancel_url: "https://example.com/cancel",
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log(`Listening on port ${4242}!`));
