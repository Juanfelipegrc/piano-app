import { configureStore  } from "@reduxjs/toolkit";
import { pianoSlice } from "./slices/pianoSlice";


export const store = configureStore({
    reducer:{
        piano: pianoSlice.reducer,
    },
})