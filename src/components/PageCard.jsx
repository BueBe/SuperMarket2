import Card from "./Card";
import { Fragment } from "react";

function PageCard(props) {
  const categories = props.tabCategories;
  const list = categories.map((elt, index) => (
    <Card key={index} product={elt} />
  ));

  return (
    <div className="col">
      <div className="row">
        <Fragment>{list}</Fragment>
      </div>
    </div>
  );
}

export default PageCard;
