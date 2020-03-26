import { createStore } from 'redux';
import rootReducers from './reducers/rootReducer';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const applyMiddleware = require("redux").applyMiddleware

const store = createStore(rootReducers, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;