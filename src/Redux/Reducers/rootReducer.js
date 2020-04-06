import accountReducer from "./accountReducers";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./authReducer";


export default combineReducers({
    accountReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer,
    auth: authReducer
})