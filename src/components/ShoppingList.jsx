import "bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { supprEltShoppingList } from "../redux/counterSlice";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function ShoppingList(props) {
  const dispatch = useDispatch();
  const countShoppingList = useSelector((state) =>
    state.counter.value["shoppingList"]
      ? state.counter.value["shoppingList"]
      : 0
  );
  const shoppingList = useSelector((state) =>
    state.counter.shoppingList.length > 0
      ? state.counter.shoppingList
      : [["idItem", "categorie", "Pas d'articles dans le panier", 0, 0]]
  );
  const total = useSelector((state) => state.counter.total);

  //const list = categories.map((elt, index) => (
  //  <Card key={index} product={elt} />
  //));

  const shoppingListLi = shoppingList.map((tab, key) => (
    <Fragment key={key}>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {tab[3] > 0 ? tab[3] + " x " : null} {tab[2]}
        <span className="badge bg-primary rounded-pill">{tab[4]} €</span>
        <span
          id="suppr2"
          className="position-absolute top-50 start-100 translate-middle badge rounded-pill bg-danger"
        >
          {tab[3] > 0 ? (
            <span
              id="suppr"
              onClick={() => dispatch(supprEltShoppingList(tab[0]))}
            >
              x
            </span>
          ) : null}
        </span>
      </li>
    </Fragment>
  ));

  //console.log(shoppingList);

  return (
    <ul className="list-group">
      <h3>Mes achats</h3>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Nombre d'article(s)
        <span className="badge bg-primary rounded-pill">
          {countShoppingList}
        </span>
      </li>
      <hr />
      {shoppingListLi}
      <hr />
      <li className="list-group-item d-flex justify-content-between align-items-center">
        TOTAL
        <span className="badge bg-primary rounded-pill">{total} €</span>
      </li>
      <div className="text-center">
        <Link className=" btn btn-primary mt-3" to="/paiement">
          Paiement
        </Link>
      </div>
    </ul>
  );
}

export default ShoppingList;
