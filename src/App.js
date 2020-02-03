import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/Header';
import Routes from './routes';

import './config/ReactotronConfig';
import store from './store';

import GlobalStyle from './styles/global';

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes />
          <GlobalStyle />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
