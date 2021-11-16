import "./styles.css";
//import bootstrap from "bootstrap";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import PageCard from "./components/PageCard";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import About from "./components/About";
import ShoppingList from "./components/ShoppingList";
import products from "./assets/products";
import Payment from "./components/Payment";

export default function App() {
  const tabCategories = products;
  return (
    <div className="container">
      <div className="row">
        <Menu tabArticles="tabArticles" />
      </div>
      <div className="row">
        <Routes>
          <Route
            path="/"
            element={
              <Fragment>
                <Categories tabCategories={tabCategories} />
                <PageCard tabCategories={tabCategories} />
              </Fragment>
            }
          />
          <Route path="about" element={<About />} />
          <Route path="panier" element={<ShoppingList />} />
          <Route path="paiement" element={<Payment />} />
        </Routes>
      </div>
    </div>
  );
}
