import titles from './titles';
import posts from './posts';
import { combineReducers } from "redux";

const rootReducer = combineReducers({titles, posts});

export default rootReducer;