import { configureStore, applyMiddleware , getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./CombineReducer";
import api from "./middleware/api";
import func from "./middleware/func";
import logger from "./middleware/logger";
import Toastify from "./middleware/toastify";



const store = configureStore({
  reducer,
middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(logger({ destination: "console" }),
Toastify,
api
)

});
export default store;









// store.dispatch((dispatch,getState) => {
//   //calling API
//   dispatch({ type: "bugsRecieved", bugs:[1,2,3,4] })
//   console.log(getState)
// });
