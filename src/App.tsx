import React from "react";
import CartProvider from "./context/cart";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <>
      <CartProvider>
        <Routes />
      </CartProvider>
    </>
  );
};

export default App;
