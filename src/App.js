<<<<<<< HEAD
import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";
// import { CartProvider } from "./context/use-cart";

import Routes from "./routes";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
=======
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './Context/Cart';

import Routes from './routes';
import Header from './components/Header';

import GlobalStyle from './styles/global';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </CartProvider>
>>>>>>> 0741350256f927c2d6d51a3a27d19bd6ddf1b5d8
  );
};

export default App;
