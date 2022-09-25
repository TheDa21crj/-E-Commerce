// import React from "react";

// export default function Buy() {
//   return <div>Buy</div>;
// }

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51Lgt4qSHqT580lQoDmyiLAtpczEc66XT8rHRf6oHP55ImV5SMRaf4vhfpPcPZIlIQalnVasmlk8lhxCNzb6zBU2o00z5vW3cMt"
);

export default function Buy() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret:
      "sk_test_51Lgt4qSHqT580lQoNjbMWQgcwIZ5Pl2zh9b3oqhW445R6tNof71oWGKwykSSg1YKM9xEG5cFHsXxgv6rcUSYCU1Q00PurK7HR1",
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
}
