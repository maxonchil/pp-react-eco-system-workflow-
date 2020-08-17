import { applyMiddleware, compose, createStore, Store } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/root.reducer";

const store: Store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk),
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    )
);
export default store;
