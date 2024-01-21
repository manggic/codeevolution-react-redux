import { createStore, combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducers";
import iceCreamReducer from "./ice-cream/iceCreamReducers";
import { composeWithDevTools } from "redux-devtools-extension";

import logger from "redux-logger";

import { applyMiddleware } from "redux";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
