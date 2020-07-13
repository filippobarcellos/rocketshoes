import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './modules/rootReducer';

const initialState = {};

const store = createStore(rootReducer, initialState, composeWithDevTools());

export default store;
