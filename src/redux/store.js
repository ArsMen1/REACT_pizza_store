import { createStore } from "redux";

import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //Подключение Redux Chrome
);

window.store = store;

export default store;
