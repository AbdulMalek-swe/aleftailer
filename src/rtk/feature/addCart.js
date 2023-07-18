import { createSlice } from "@reduxjs/toolkit";
const initialItems = () =>{
    const localStorageData = localStorage.getItem('newcart'); 
     
    if(!localStorageData){
        return []
    }
    else{
        return JSON.parse(localStorageData)
    }
}
const cartData = {
 items:initialItems()
};
const addCartSlices = createSlice({
  name: "Cart",
  initialState: cartData,
  reducers: {
    addToCart: (state, action) => { 
    //    console.log(action,state.items);   
       const { _id } = action.payload;
       const existingProduct = state.items.find((product) => product._id === _id);
       if (existingProduct) {
        if(action.payload.quantity){
          existingProduct.quantity += action.payload.quantity
        }
        else{
          existingProduct.quantity += 1;
        }
          
      } 
      
       else {
        if(action.payload.quantity){
         
          state.items.push({ ...action.payload  });
        }
        else{
          state.items.push({ ...action.payload, quantity: 1 });
        }
       
      }
    },
    removeFromCart: (state, action) => {
        console.log(action.payload);
        const  _id  = action.payload;
       const existingProduct = state.items.find((product) => product._id === _id);
       if (!existingProduct) {
         state.items = state.items
      }
       else if (existingProduct.quantity>1) {
        existingProduct.quantity -= 1;
      } else {
       
      state.items = state.items.filter((product) => product._id !== _id);
    
      }
    },
    
  },
});

export default addCartSlices.reducer;
export const addCartActions = addCartSlices.actions;