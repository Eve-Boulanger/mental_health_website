import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { DonationFormStripe } from "./DonationFormStripe";

// This container holds the donation form with Stripe API.

// TODO: replace public key with stripe account public key
const PUBLIC_KEY = "YOUR_PUBLIC_TEST";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <DonationFormStripe />
    </Elements>
  );
};

export default Stripe;