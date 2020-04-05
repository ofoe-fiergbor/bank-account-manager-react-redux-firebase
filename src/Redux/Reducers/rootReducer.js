import accountReducer from "./accountReducers";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";


export default combineReducers({
    accountReducer,
    firestore:firestoreReducer
})