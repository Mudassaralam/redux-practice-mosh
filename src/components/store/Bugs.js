import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "bugs",
 initialState: {
  list:[],
  loading:false,
  lastFetch:null,
 },
  reducers: {
    bugAssignedToUser:(bugs,action)=>{
      const {bugId, userID } = action.payload;
      const index = bugs.list.findIndex(bug =>  bug.id === bugId);
      bugs.list[index].userID = userID ; 

    },
    bugAdded: (bugs, action) => {
      bugs.list.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list[index].resolved = true;
    },
  },
});
// console.log(slice)
export default slice.reducer;
export const { bugAdded, bugResolved , bugAssignedToUser } = slice.actions;
