import { combineReducer } from "redux";

const user = (state = null) => state;

const cars = (state = []) => state;

export default combineReducer({ user, cars });
