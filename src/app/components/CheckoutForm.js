"use client";

import { useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Style à appliquer aux champs du formulaire de paiement
  const inputStyle = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": { color: "#aab7c4" },
      },
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.log("Stripe ou Elements non disponibles");
      return;
    }

    setLoading(true);

    // Récupère les éléments séparés
    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);
    const cardCvcElement = elements.getElement(CardCvcElement);

    // Vérifie que tous les éléments sont présents
    if (!cardNumberElement || !cardExpiryElement || !cardCvcElement) {
      setError("Un ou plusieurs champs sont manquants.");
      setLoading(false);
      return;
    }

    // Crée un PaymentIntent côté serveur
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 5000 }),
    });

    const { clientSecret } = await res.json();

    // Confirme le paiement avec Stripe
    const { paymentIntent, error: stripeError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardNumberElement },
      });

    if (stripeError) {
      setError(stripeError.message);
      setLoading(false);
    } else {
      alert("Paiement réussi !");
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="container-fluid">
        <div className="row border-gray-200 border-2 border-top-0 rounded-bottom pb-3">
          {/* Numéro de carte */}
          <div className="col-12 mb-3">
            <label className="form-label">Numéro de carte</label>
            <div className="row">
              <div className="col-auto">
                <img
                  src="/credit-card.svg"
                  alt="credit-card-icon"
                  width="40"
                  height="40"
                />
              </div>
              <div className="p-2 border rounded col mr-3">
                <CardNumberElement options={inputStyle} />
              </div>
            </div>
          </div>

          {/* Date d'expiration */}
          <div className="col-md-6 mt-3">
            <label className="form-label">Date d'expiration</label>
            <div className="p-2 border rounded">
              <CardExpiryElement options={inputStyle} />
            </div>
          </div>

          {/* CVC/CVV */}
          <div className="col-md-6 mt-3">
            <label className="form-label">CVC/CVV</label>
            <div className="p-2 border rounded">
              <CardCvcElement options={inputStyle} />
            </div>
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <button
          type="submit"
          disabled={!stripe || loading}
          name="submitCard"
          className="col-12 btnSubmit text-white py-3 mt-3 rounded fs-5"
        >
          <i className="bi bi-lock-fill"></i>{" "}
          {loading ? "Paiement en cours..." : "Payer"}
        </button>
      </form>
    </div>
  );
}
