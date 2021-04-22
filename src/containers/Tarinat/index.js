import tarinaReducer from "./tarinaReducer";

import store from "../../store";

store.injectReducer("tarinoita", tarinaReducer);

export { default } from "./Tarinat";