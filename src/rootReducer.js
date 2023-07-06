import { combineReducers } from "@reduxjs/toolkit";
import navigationReducer from './features/navigationSlice.js';

const rootReducer = combineReducers({
  navigator: navigationReducer,
})

export default rootReducer;
