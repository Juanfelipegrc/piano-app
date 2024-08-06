import { createSlice } from '@reduxjs/toolkit';


export const pianoSlice = createSlice({
    name: 'pianoSlice',
    initialState: {
        isInitialized: false,
        instrument: 'acoustic_grand_piano'
    },
    reducers: {

        setIsInitialized: (state, {payload}) => {
            state.isInitialized = payload;
        },
        setInstrument: (state, {payload}) => {
            state.instrument = payload;
        },
        
        
        
    }
});


export const {
               
                setIsInitialized,
                setInstrument

            } = pianoSlice.actions;