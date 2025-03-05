"use client";

import { useState, useRef } from "react";
import CountrySelect from "./CountrySelect";

const Formulaire = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [showBillingAddress, setShowBillingAddress] = useState(false);
  const billingRef = useRef(null);

  const handleCheckboxChange = (e) => {
    setShowBillingAddress(e.target.checked);

    // Si la case est cochée, faire défiler jusqu'au formulaire de facturation
    if (e.target.checked) {
      setTimeout(() => {
        billingRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 200); // Petit délai pour éviter un scroll avant l'affichage
    }
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="mb-3">
      {/* Adresse de livraison */}
      <div className="">
        <div className="pb-4">
          <div className="fw-bold fs-2">Contact</div>
          <div>Entrez vos informations de contact</div>
        </div>
        <form className="row g-3">
          {/* Email et emails marketings */}
          <div className="mb-3">
            <label htmlFor="InputEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="InputEmail"
              placeholder="Indiquez votre email"
            />
            <div className="form-check pt-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="CheckMail"
                name="CheckMail"
              />
              <label className="form-check-label" htmlFor="CheckMail">
                J'accepte de recevoir des emails marketings
              </label>
            </div>
          </div>
          <div>
            <div className="fw-bold fs-2">Adresse de livraison</div>
            <div>Entrez votre adresse de livraison</div>
          </div>

          {/* Prénom */}
          <div className="col-md-6">
            <label htmlFor="inputPrenom" className="form-label">
              Prénom
            </label>
            <input
              type="text"
              className="form-control"
              id="inputPrenom"
              name="prenom"
              placeholder="Indiquez votre prénom"
            />
          </div>

          {/* Nom */}
          <div className="col-md-6">
            <label htmlFor="inputNom" className="form-label">
              Nom
            </label>
            <input
              type="text"
              className="form-control"
              id="inputNom"
              name="nom"
              placeholder="Indiquez votre nom"
            />
          </div>

          {/* Adresse */}
          <div className="mb-3">
            <label htmlFor="InputAdress" className="form-label">
              Adresse
            </label>
            <input
              type="text"
              className="form-control"
              id="InputAdress"
              name="adresse"
              placeholder="123 rue principale"
            />
          </div>

          {/* Adresse complémentaire */}
          <div className="mb-3">
            <label htmlFor="InputAdress2" className="form-label">
              Adresse complémentaire (optionnel)
            </label>
            <input
              type="text"
              className="form-control"
              id="InputAdress2"
              name="adresse2"
              placeholder="Adresse complémentaire"
            />
          </div>

          {/* Liste déroulante des pays avec API */}
          <div className="mb-3">
            <label htmlFor="InputPays" className="form-label">
              Pays
            </label>
            <CountrySelect onChange={handleCountryChange} />
          </div>

          {/* Ville */}
          <div className="col-md-4">
            <label htmlFor="inputVille" className="form-label">
              Ville
            </label>
            <input
              type="text"
              className="form-control"
              id="inputVille"
              name="ville"
              placeholder="Indiquez votre ville"
            />
          </div>

          {/* Etat */}
          <div className="col-md-4">
            <label htmlFor="inputEtat" className="form-label">
              État
            </label>
            <input
              type="text"
              className="form-control"
              id="inputEtat"
              name="etat"
              placeholder="Indiquez votre état"
            />
          </div>

          {/* Code postal */}
          <div className="col-md-4">
            <label htmlFor="inputPostal" className="form-label">
              Code postal
            </label>
            <input
              type="number"
              className="form-control"
              id="inputPostal"
              name="postal"
              placeholder="Indiquez votre code postal"
            />
          </div>

          {/* Téléphone */}
          <div className="mb-3">
            <label htmlFor="InputTel" className="form-label">
              Téléphone
            </label>
            <input
              type="tel"
              className="form-control"
              id="InputTel"
              name="tel"
              placeholder="Indiquez votre numéro de téléphone"
            />
          </div>

          {/* Si adresse de facturation différente */}
          <div className="mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="CheckFact"
                name="CheckFact"
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="CheckFact">
                L'adresse de facturation est différente de l'adresse de
                livraison
              </label>
            </div>
          </div>
        </form>
      </div>

      {/* Adresse de facturation si la case est cochée */}
      {showBillingAddress && (
        <div ref={billingRef} className="mt-4">
          <div className="container-lg">
            <form className="row g-3">
              <div>
                <div className="fw-bold fs-2">Adresse de facturation</div>
                <div>Entrez votre adresse de facturation</div>
              </div>

              {/* Prénom */}
              <div className="col-md-6">
                <label htmlFor="inputPrenom" className="form-label">
                  Prénom
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPrenom"
                  name="prenom"
                  placeholder="Indiquez votre prénom"
                />
              </div>

              {/* Nom */}
              <div className="col-md-6">
                <label htmlFor="inputNom" className="form-label">
                  Nom
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputNom"
                  name="nom"
                  placeholder="Indiquez votre nom"
                />
              </div>

              {/* Adresse */}
              <div className="mb-3">
                <label htmlFor="InputAdress" className="form-label">
                  Adresse
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="InputAdress"
                  name="adresse"
                  placeholder="123 rue principale"
                />
              </div>

              {/* Adresse complémentaire */}
              <div className="mb-3">
                <label htmlFor="InputAdress2" className="form-label">
                  Adresse complémentaire (optionnel)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="InputAdress2"
                  name="adresse2"
                  placeholder="Adresse complémentaire"
                />
              </div>

              {/* Liste déroulante des pays avec API */}
              <div className="mb-3">
                <label htmlFor="InputPays" className="form-label">
                  Pays
                </label>
                <CountrySelect onChange={handleCountryChange} />
              </div>

              {/* Ville */}
              <div className="col-md-4">
                <label htmlFor="inputVille" className="form-label">
                  Ville
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputVille"
                  name="ville"
                  placeholder="Indiquez votre ville"
                />
              </div>

              {/* Etat */}
              <div className="col-md-4">
                <label htmlFor="inputEtat" className="form-label">
                  État
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEtat"
                  name="etat"
                  placeholder="Indiquez votre état"
                />
              </div>

              {/* Code postal */}
              <div className="col-md-4">
                <label htmlFor="inputPostal" className="form-label">
                  Code postal
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="inputPostal"
                  name="postal"
                  placeholder="Indiquez votre code postal"
                />
              </div>

              {/* Téléphone */}
              <div className="mb-3">
                <label htmlFor="InputTel" className="form-label">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="InputTel"
                  name="telephone"
                  placeholder="Indiquez votre numéro de téléphone"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Formulaire;
