import { legacy_createStore as createStore ,applyMiddleware } from "redux";
// import Reducer from "./reducer";
// import Reducer from './Bugs'
// import Reducer from './Projects'
import Reducer from './CombineReducer'
import logger from './middleware/logger'
import { devToolsEnhancer } from "redux-devtools-extension";


const store = createStore(Reducer, applyMiddleware(logger),
    devToolsEnhancer({trace:true}))
export default store;

// export default function(){
//   return configureStore({
//     Reducer,
//   });
// }

// const store = configureStore({reducer : Reducer });
// export default store;
 