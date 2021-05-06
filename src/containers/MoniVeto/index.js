import monivetoReducer from './monivetoReducer';

import store from '../../store';

store.injectReducer("veikkaus", monivetoReducer);

export { default } from "./MoniVeto";