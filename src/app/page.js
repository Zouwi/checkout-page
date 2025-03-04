"use client";

import Formulaire from "./components/Formulaire";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./components/CheckoutForm";
import Article from "./components/Article";
import Navbar from "./components/Navbar";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
); // Remplace par ta clé publique Stripe

export default function Checkout() {
  return (
    <div className="">
      <Navbar />
      <div className="container-fluid px-2 px-lg-5">
        <div className="row g-0">
          <div className="col-12 col-lg-8 order-2 order-lg-1 container bg-white border-r-2 border-gray-200 p-4 pt-4 pt-lg-2 mb-10">
            <Formulaire />
            <div className="mb-3">
              <div className="fs-2 fw-bold">Méthode de livraison</div>
              <div>Sélectionnez votre méthdoe de livraison ci-dessous</div>
              <div className="bg-gray-100 p-3 mt-4 fw-bold">
                Information<br></br>
                Sélectionnez un pays pour voir les méthodes d'expédition
                disponibles
              </div>
            </div>
            <div className="mb-3">
              <div className="fs-2 fw-bold">Paiement</div>
              <div>
                Sélectionnez votre méthode de paiement ci-dessous. Toutes les
                transactions sont sécurisées et cryptées
              </div>
            </div>
            <div>
              <Elements stripe={stripePromise}>
                <div className="">
                  <div className="bg-gray-100 py-8 px-15 fw-bold topCard">
                    <form className="row">
                      <div className="form-check form-check-reverse col text-start">
                        <label
                          className="form-check-label fs-5"
                          htmlFor="RadioCard"
                        >
                          <div className="row align-items-center">
                            <i className="bi bi-credit-card fs-4 col-2"></i>
                            <div className="col-10">Carte de crédit</div>
                          </div>
                        </label>
                        <input
                          type="radio"
                          className="form-check-input"
                          id="RadioCard"
                          checked={true}
                          readOnly
                          name="paymentMethod"
                        />
                      </div>
                    </form>
                  </div>
                  <CheckoutForm />
                </div>
              </Elements>
              <div className="text-center mt-3">
                {/* Ligne avec l'icône et le texte */}
                <div className="row justify-content-center align-items-center mb-2">
                  <i className="bi bi-lock-fill text-gray-400 col-auto"></i>
                  <div className="text-gray-400 col-auto">
                    Toutes les transactions sont sécurisées et cryptées
                  </div>
                </div>

                {/* Ligne des logos de paiement */}
                <div className="row justify-content-center align-items-center">
                  <div className="col-auto">
                    <img
                      src="/Visa_logo.svg"
                      alt="visa-logo"
                      style={{ width: "50px", height: "auto" }}
                    />
                  </div>
                  <div className="col-auto">
                    <img
                      src="/Mastercard-logo.svg"
                      alt="mastercard-logo"
                      style={{ width: "50px", height: "auto" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 order-1 order-lg-2 container p-lg-3 pt-2 pb-4">
            <Article />
          </div>
        </div>
      </div>
    </div>
  );
}
