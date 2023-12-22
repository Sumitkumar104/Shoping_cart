import { createSlice } from "@reduxjs/toolkit";

export const CartSlice=createSlice({
    name:"cart",
    initialState:[{},{}],
    reducers:{
        add:()=>{},
        remove:()=>{},
        // amount:14
    }
})
export const {add,remove}=CartSlice.actions;
export default CartSlice.reducer;