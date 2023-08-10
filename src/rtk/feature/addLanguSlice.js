import { createSlice } from "@reduxjs/toolkit";
const UserData = {
  data:true,
};
const addLanguSlices = createSlice({
  name: "lang",
  initialState: UserData,
  reducers: {
    addLangu: (state, action) => { 
      if(action.payload==='en'){
        state.data = true;
      }
       else{
        state.data = false;
       }
    
    },
    
  },
});

export default addLanguSlices.reducer;
export const addLanguActions = addLanguSlices.actions;