import * as actions from "./actionTypes";
import { createAction } from '@reduxjs/toolkit';
//Actions with Redux Toolkit


 export const bugAdded = createAction("bugUpdated");
 export const bugResolved = createAction("bugResolved");
 export const bugRemoved = createAction("bugRemoved");


// console.log(bugAdded());




//Actions With Core Redux
// export function bugAdded(description) {
//   return {
//     type: actions.BUG_ADDED,
//     payload: {
//       description: description,
//     },
//   };
// }

// export function bugRemoved() {
//   return {
//     type: actions.BUG_REMOVED,
//     payload: {
//       id: 1,
//     },
//   };
// }

//This is by FAT Arrow function . If we are using fat arrow function we do not need to returen the function


// export const bugResolved = id =>({
//     type:actions.BUG_RESOLVED,
//     payload:{
//         id:id
//     }
// })
