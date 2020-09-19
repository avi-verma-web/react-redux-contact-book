import { combineReducers } from "redux";

//Reducers
import { contactReducer } from "./reducer";

const rootReducer = combineReducers({
  contactReducer: contactReducer,
});

export default rootReducer;
