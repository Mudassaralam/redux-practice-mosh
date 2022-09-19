import * as actions from './actionTypes'
import { bugAdded,bugRemoved , bugResolved } from  './action'
import { createReducer } from '@reduxjs/toolkit';
import slice from './Bugs';
let lastId = 0;

//Method : Default Redux Toolkit CreateActions
//This is by Redux toolkit default createReducer function

 export default  createReducer([],{
    [bugAdded.type]:(bugs,action)=>{
        bugs.push({
            id:++lastId,
            description:action.payload.description,
            resolved:false
        })
    },
    [bugResolved.type]:(bugs,action)=>{
       const index = bugs.findIndex(bug => bug.id == action.payload.id)
        bugs[index].resolved = true;
    }
    
})





//This is the reducers that get action types from reduxtoolkit actionscreate

// export default function reducer(state = [],action){
//     switch(action.type){
//         case bugAdded.type:
//             return [
//                 ...state,
//                 {
//                   id: ++lastId,
//                   description: action.payload.description,
//                   resolved: false,
//                 },
//               ]
//         case bugRemoved.type: 
//         return state.filter((bug) => bug.id !== action.payload.id);
//         case bugResolved.type:
//             return state.map((bug)=> bug.id !== action.payload.id ? bug :{...bug,resolved:true})

//         default :
//         return state;

//     }
// }


//Method 1 : Default Redux Method
//This is the reducers that get actions from action types only redux

// export default function reducer(state = [],action){
//     switch(action.type){
//         case actions.bugAdded:
//             return [
//                 ...state,
//                 {
//                   id: ++lastId,
//                   description: action.payload.description,
//                   resolved: false,
//                 },
//               ]
//         case actions.BUG_REMOVED: 
//         return state.filter((bug) => bug.id !== action.payload.id);
//         case actions.BUG_RESOLVED:
//             return state.map((bug)=> bug.id !== action.payload.id ? bug :{...bug,resolved:true})

//         default :
//         return state;

//     }
// }
