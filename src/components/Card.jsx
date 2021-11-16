//import bootstrap from "bootstrap";
import "bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Counter } from "../redux/counter";
import { useDispatch } from "react-redux";
import { addEltShoppingList } from "../redux/counterSlice";

function Card(props) {
  //console.log(props.product);
  const title = props.product[0];
  const price = props.product[1][1];
  const quantityAfter = props.product[1][2];
  const categorie = title;
  const dispatch = useDispatch();
  const itemId = title + Math.round(Math.random() * 1000000);
  const product = [itemId, categorie, title, quantityAfter, price];
  //console.log(title);
  const urlImageProductLocal = require(`../assets/imagesArticles/Légumes.jpg`);
  //const urlImageProductInline = `${process.env.PUBLIC_URL}/assets/imagesArticles/${title}.jpg`;

  return (
    <div className="col-sm-6 col-md-4 card">
      <h5 className="card-header">{title}</h5>
      <div className="card-body">
        <h6 className="card-title">Catégorie: {categorie}</h6>
        <p className="card-text">Product's descrition.</p>
        <img className="logo" src={urlImageProductLocal} alt="Une image" />

        <Counter itemId={itemId} />
        <button
          className="btn btn-primary"
          onClick={() => dispatch(addEltShoppingList(product))}
        >
          Go
        </button>
      </div>
    </div>
  );
}

export default Card;
