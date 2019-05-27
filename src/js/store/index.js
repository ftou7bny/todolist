import { createStore } from "redux";
import rootReducer from "../reducers/index";


//Creation Store
const store = createStore(rootReducer);




export default store;