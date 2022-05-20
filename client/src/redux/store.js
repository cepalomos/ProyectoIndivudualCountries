import { createStore } from "redux";
import countriesApi from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(
  countriesApi,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
