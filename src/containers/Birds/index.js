import birdsReducer from './birdsReducer';

import store from "../../store";

store.injectReducer("birds", birdsReducer);

export { default } from "./Birds";