import { combineReducers } from 'redux';
import bugReducer from './Bugs';
import projectReducer from './Projects';
import userReducer from './users';

export default  combineReducers({
    bugs:bugReducer,
    projects:projectReducer,
    users:userReducer,


});