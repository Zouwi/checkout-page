const Navbar = () => {
  return (
    <nav
      className="navbar bg-white sticky-top"
      style={{
        borderTop: "2px solid #E2D38E",
        borderBottom: "2px solid #ECECEC",
      }}
    >
      <div className="container-fluid px-5">
        <a className="navbar-brand" href="#">
          <img src="/logo-rainbow.svg" alt="logo-rainbow" width="40" height="40"/>
        </a>
        <a className="d-flex nav-link" href="#">
          Panier
          <span className="ms-2">
            <i className="bi bi-basket2-fill"></i>
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
