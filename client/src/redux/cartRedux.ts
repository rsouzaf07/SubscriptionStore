import { createSlice } from "@reduxjs/toolkit";

const carteSlice = createSlice ({
    name: 'cart',
    initialState: {
        products: [],
        quantity: 0
    },
    reducers: {
        addProduct: (state,action) => {
            state.quantity++
        }
    }
})