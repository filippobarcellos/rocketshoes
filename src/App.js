import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";
import { CartProvider } from "./context/use-cart";

import Routes from "./routes";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Routes />
        <GlobalStyle />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
