import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

function Categories(props) {
  const tabCategories = props.tabCategories;
  const listItems = tabCategories.map((elt, index) => (
    <li key={index}>{elt[0]}</li>
  ));

  return (
    <div className="col-12 col-sm-3">
      <ul>{listItems}</ul>
    </div>
  );
}

export default Categories;
