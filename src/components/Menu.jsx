import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Menu(props) {
  const countShoppingList = useSelector((state) =>
    state.counter.value["shoppingList"]
      ? state.counter.value["shoppingList"]
      : 0
  );

  const totalShoppingList = useSelector((state) => state.counter.total);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          type="button"
          className="bg-light faviconPanier position-relative"
        >
          <Link
            className="btn btn-outline-success"
            aria-current="page"
            to="/panier"
          >
            Panier
          </Link>

          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {countShoppingList} article(s) pour ({totalShoppingList} €)
          </span>
        </button>
        <Link className="btn btn-outline-primary" aria-current="page" to="/">
          Mes courses en ligne
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                Nous
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-item nav-link" to="/histoire">
                Histoire
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="..."
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Chercher
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
