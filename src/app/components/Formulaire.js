"use client";

import { useState } from "react";
import CountrySelect from "./CountrySelect";

const Formulaire = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [email, setEmail] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="container-lg bg-white border-r-2 border-gray-200 p-5 pt-2">
      <div className="fw-bold fs-2">Contact</div>
      <div>Entrez vos informations de contact</div>
      <form className="row g-3">
        <div className="mb-3">
          <label htmlFor="InputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="InputEmail"
            placeholder="Indiquez votre email"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            J'accepte de recevoir des emails marketings
          </label>
        </div>
        <div>
          <div className="fw-bold fs-2">Adresse de livraison</div>
          <div>Entrez votre adresse de livraison</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPrenom" className="form-label">
            Prénom
          </label>
          <input
            type="text"
            className="form-control"
            id="inputPrenom"
            placeholder="Indiquez votre prénom"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputNom" className="form-label">
            Nom
          </label>
          <input
            type="text"
            className="form-control"
            id="inputNom"
            placeholder="Indiquez votre nom"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputAdress" className="form-label">
            Adresse
          </label>
          <input
            type="text"
            className="form-control"
            id="InputAdress"
            placeholder="123 rue principale"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputAdress2" className="form-label">
            Adresse complémentaire (optionnel)
          </label>
          <input
            type="text"
            className="form-control"
            id="InputAdress2"
            placeholder="Adresse complémentaire"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputPays" className="form-label">
            Pays
          </label>
          <CountrySelect onChange={handleCountryChange} />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputVille" className="form-label">
            Ville
          </label>
          <input
            type="text"
            className="form-control"
            id="inputVille"
            placeholder="Indiquez votre ville"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputEtat" className="form-label">
            État
          </label>
          <input
            type="text"
            className="form-control"
            id="inputEtat"
            placeholder="Indiquez votre état"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputPostal" className="form-label">
            Code postal
          </label>
          <input
            type="number"
            className="form-control"
            id="inputPostal"
            placeholder="Indiquez votre code postal"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputTel" className="form-label">
            Téléphone
          </label>
          <input
            type="tel"
            className="form-control"
            id="InputTel"
            placeholder="Indiquez votre numéro de téléphone"
          />
        </div>
        <button
          type="submit"
          className="btn btn-lg"
          style={{
            backgroundColor: "#CA7910",
            color: "#fff",
          }}
        >
          <i className="bi bi-lock"></i>
          Payer
        </button>
      </form>
    </div>
  );
};

export default Formulaire;
