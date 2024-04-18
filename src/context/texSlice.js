import { createSlice } from "@reduxjs/toolkit";
import { Value } from "sass";


export const textSlice = createSlice({
    name: "text",
    initialState: {
        value: JSON.parse(localStorage.getItem("texts")) || [],
    },
    reducers: {
        addText(state, actions) {
            state.value = [...state.value, actions.payload]
            localStorage.setItem("texts", JSON.stringify(state.value))
        }
    },
});

export const { addText } = textSlice.actions;

export default textSlice.reducer;