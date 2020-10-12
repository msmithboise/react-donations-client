import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

export const store = createStore(
    //pass reducers here:
    {},
compose(
    applyMiddleware(thunk))
)