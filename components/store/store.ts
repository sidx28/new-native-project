// store.ts
import { Store, applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import RootReducer from "./reducers";
import rootSaga from "./sagas";

/* Root Saga Middleware */
const sagaMiddleware = createSagaMiddleware();

let middlewares = applyMiddleware(sagaMiddleware);

/* Root Store with all the combined reducers */
const store = createStore(RootReducer, middlewares);

/* Run the sagas */
sagaMiddleware.run(rootSaga);

export default store;
