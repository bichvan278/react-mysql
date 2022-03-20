import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from 'redux-thunk';
import userReducer from "./reducers/userReducer";
// import {allData} from "./sagas/index";

const rootReducer = combineReducers({
    userReducer,
});

const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

// const sagaMiddleware = createSagaMiddleware();
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(sagaMiddleware))
// );
// sagaMiddleware.run(allData);

export default store;