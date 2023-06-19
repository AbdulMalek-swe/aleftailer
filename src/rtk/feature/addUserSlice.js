import { createSlice } from "@reduxjs/toolkit";
const UserData = {
  first_name: "",
  last_name: "",
  email: "",
  contactNumber:""
  
};
const addUserSlices = createSlice({
  name: "User",
  initialState: UserData,
  reducers: {
    addUser: (state, action) => { 
      state.email = action.payload.email;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.contactNumber = action.payload.contactNumber
    },
    removeUser: (state, action) => {
      state.email = "";
      state.first_name = "";
      state.last_name = "";
      state.contactNumber = "";
    },
  },
});

export default addUserSlices.reducer;
export const addUserActions = addUserSlices.actions;