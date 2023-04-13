import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

type IStoreState = ReturnType<typeof rootReducer>;

export { store };
export type { IStoreState };
