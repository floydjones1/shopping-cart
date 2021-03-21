import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./pages/product";
import Cart from "./pages/cart";
import Navbar from "./components/Navbar";

import Home from "./pages/index";

const routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
};

export default routes;
