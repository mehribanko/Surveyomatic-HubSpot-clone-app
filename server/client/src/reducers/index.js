import { combineReducers } from "redux";
import authReducer from "./authReducer";
import {reducer as formReducerfromRedux} from 'redux-form';

export default combineReducers({
    auth: authReducer,
    form: formReducerfromRedux

});