import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    value: []
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialValue,
    reducers: {
        addItem: (state, action) => {
            state.value.push(action.payload);
        },
        removeItem: (state, action) => {
            const idToRemove = action.payload.id;
            state.value= state.value.filter(item => item !== idToRemove);
        },
        clearCart: (state) => {
            state.value = [];
        }        
    }
});

export const { addItem, removeItem,clearCart } = cartSlice.actions;
export default cartSlice.reducer;


