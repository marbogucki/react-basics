import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import articlesReducer from "./views/Articles/store/reducer";

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    articlesState: articlesReducer,
  }),
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
