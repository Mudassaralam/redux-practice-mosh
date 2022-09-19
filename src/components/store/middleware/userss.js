 
import * as actions from '../api'
import axios from 'axios'

const users = store => next => action=>{

    if(action.type !== actions.usersData) return next(action);

    const {  url, method, onSuccess } = action.payload;

    try {
        
        const response = axios.get 


    } catch (error) {
        
    }


}