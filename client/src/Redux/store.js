import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { authReducer } from "./Auth/authReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  //   data: dataReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
