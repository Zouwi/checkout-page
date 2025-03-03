"use client";

import Formulaire from "./components/Formulaire";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./components/CheckoutForm";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
); // Remplace par ta clé publique Stripe

export default function Checkout() {
  return (
    <div className="">
      <nav
        className="navbar bg-white"
        style={{
          borderTop: "2px solid #E2D38E",
          borderBottom: "2px solid #ECECEC",
        }}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            Logo
          </a>
          <a className="d-flex nav-link" href="#">
            Panier
            <span className="ms-2">
              <i className="bi bi-cart"></i>
            </span>
          </a>
        </div>
      </nav>
      <Formulaire />
      <div>
        <Elements stripe={stripePromise}>
          <div className="max-w-md mx-auto mt-10 p-4 border rounded">
            <h2 className="text-xl font-bold mb-4">Paiement</h2>
            <CheckoutForm />
          </div>
        </Elements>
      </div>
    </div>
  );
}
