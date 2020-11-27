import { combineReducers } from "redux";

import isLoggedin from "./isLoggedin";
import todoReducer from "./todos";


 const allReducers = combineReducers({
    AllTodos:todoReducer,
    isLogged:isLoggedin
});

export default allReducers;
