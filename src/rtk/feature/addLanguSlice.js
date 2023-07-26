import { createSlice } from "@reduxjs/toolkit";
const UserData = {
  data:true,
};
const addLanguSlices = createSlice({
  name: "lang",
  initialState: UserData,
  reducers: {
    addLangu: (state, action) => { 
      state.data = !state.data;
      
    },
    
  },
});

export default addLanguSlices.reducer;
export const addLanguActions = addLanguSlices.actions;