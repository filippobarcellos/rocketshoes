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
  );
}

export default App;
