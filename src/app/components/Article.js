const Article = () => {
  return (
    <div className="container">
      <div className="fs-2 fw-bold pb-3">Votre commande</div>

      {/* Informations sur l'article */}
      <div className="row">
        <div className="position-relative d-inline-block col-12 col-lg-3 parentArticle">
          <img
            src="/article-img.webp"
            alt="product-image"
            className="img-fluid imgArticle"
            style={{
              minWidth: "95px",
              maxWidth: "150px",
              width: "100%",
              height: "auto",
            }}
          />
          <span className="pastille">1</span>
        </div>
        <div className="col-lg-7 col-9">
          <div className="fw-bold fs-5">
            Montessori Multi-Usage Observation Tower
          </div>
          <div className="text-gray-400">Default title</div>
        </div>
        <div className="col-lg-2 col-3 fw-bold fs-5">€39.90</div>
      </div>

      {/* Champ du code de réduction */}
      <form className="row g-auto mt-4">
        <div className="col">
          <label htmlFor="inputCode" className="visually-hidden">
            Code de réduction
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCode"
            placeholder="Code de réduction"
            name="code"
          />
        </div>
        <div className="col-auto">
          <button
            type="submit"
            className="btn btn-primary mb-3"
            disabled={true}
          >
            Appliquer
          </button>
        </div>
      </form>

      {/* Totaux */}
      <div className="row g-3 mt-1 border-bottom  pb-4">
        <div className="col-10">Sous-total - 1 items</div>
        <div className="col-2 text-end">€39.90</div>
        <div className="col-10">Livraison</div>
        <div className="col-2 text-end">-</div>
        <div className="col-10">Taxes estimées</div>
        <div className="col-2 text-end">€0.00</div>
      </div>
      <div className="mt-3">
        <div className="row g-0 mit-3">
          <div className="col-lg-10 col-9 fs-4 fw-bold">Total</div>
          <div className="col-lg-2 col-3 text-end fs-4 fw-bold">€39.90</div>
        </div>

        {/* Informations complémentaires */}
        <div className="row g-0 mt-5">
          <i className="bi bi-shield-fill-check text-success col-2 fs-4"></i>
          <div className="col-10">
            <div className="fs-5">Service client</div>
            <div className="text-gray-400">
              Nous répondons à vos questions du lundi au vendredi de 9h à 20h
            </div>
          </div>
        </div>
        <div className="row g-0 mt-4">
          <i className="bi bi-cash text-success col-2 fs-3"></i>
          <div className="col-10">
            <div className="fs-5">Satisfait ou remboursé 30 jours</div>
            <div className="text-gray-400">
              Insatisfait ? Remboursement facile et sans conditions. Votre
              satisfaction est notre priorité
            </div>
          </div>
        </div>
        <div className="row g-0 mt-4">
          <i className="bi bi-truck text-success col-2 fs-3"></i>
          <div className="col-10">
            <div className="fs-5">Expédition en 48h</div>
            <div className="text-gray-400">
              Bénéficiez d'une expédition ultra-rapide avec suivi en seulement
              48 heures
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
