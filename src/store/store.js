import { applyMiddleware, combineReducers, createStore } from "redux";
import { albumsReducer } from "./albumReducer";
import { usersReducer } from "./userReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  users: usersReducer,
  albums: albumsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
