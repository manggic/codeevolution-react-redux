import { createStore, combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducers";
import iceCreamReducer from "./ice-cream/iceCreamReducers";
import { composeWithDevTools } from 'redux-devtools-extension';

import logger from 'redux-logger'

import { applyMiddleware } from "redux";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer,  composeWithDevTools(applyMiddleware(logger)));

export default store;
