"use client";

import { useEffect, useState } from "react";

const CountrySelect = ({ onChange }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/countries")
      .then((response) => response.json())
      .then((data) => {
        // Trie les pays par ordre alphabétique
        const sortedCountries = data
          .map((country) => country.name.common)
          .sort((a, b) => a.localeCompare(b));
        setCountries(sortedCountries);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des pays :", error);
        setLoading(false);
      });
  }, []);

  return (
    <select
      className="form-select"
      id="InputPays"
      name="InputPays"
      onChange={onChange}
    >
      <option value="">Sélectionner un pays</option>
      {countries.map((country, index) => (
        <option key={index} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
};

export default CountrySelect;