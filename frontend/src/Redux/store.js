import {applyMiddleware, createStore} from 'redux';
import reducer from './reducer.js';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;