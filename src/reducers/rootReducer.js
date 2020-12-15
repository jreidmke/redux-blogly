import titles from './titles';
import post from './post';
import { combineReducers } from "redux";

const rootReducer = combineReducers({titles, post});

export default rootReducer;