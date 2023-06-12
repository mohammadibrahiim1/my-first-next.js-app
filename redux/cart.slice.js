const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart : (state,action) => {
            const itemExists = state.find(item => item.id === action.payload.id)
        }
    }
})