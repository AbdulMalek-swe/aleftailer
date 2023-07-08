import {   configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import addCart from "rtk/feature/addCart";
import addUserSlice from "rtk/feature/addUserSlice";
 
const rootReducer = combineReducers({
   user:addUserSlice,
   cart:addCart
});

//configure store
const store = configureStore({
  reducer: {
    reducer: rootReducer,
  },
});

export default store; 