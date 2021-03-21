import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "..";
import { CartContext } from "../../../context/cart";
import { BrowserRouter as Router } from "react-router-dom";

describe("Navbar", () => {
  test("checks cart count number", () => {
    render(
      <Router>
        <CartContext.Provider
          value={{
            items: [],
            numOfItems: 2, // should show the cart count number
            addToCart: () => {},
            incrementItem: () => {},
            decrementItem: () => {},
            removeItem: () => {},
          }}
        >
          <Navbar />
        </CartContext.Provider>
      </Router>
    );

    // check expected and assert with unexpected
    expect(screen.queryByText("2")).toBeTruthy();
    expect(screen.queryByText("5")).toBeFalsy();
  });
});
