import { createSlice } from '@reduxjs/toolkit';


export const pianoSlice = createSlice({
    name: 'pianoSlice',
    initialState: {
        player: null,
        audioContext: null,
        isInitialized: false,
        instrument: 'acoustic_grand_piano'
    },
    reducers: {
        setPlayer: (state, {payload}) => {
            state.player = payload;
        },
        setAudioContext: (state, {payload}) => {
            state.audioContext = payload;
        },
        setIsInitialized: (state, {payload}) => {
            state.isInitialized = payload;
        },
        setInstrument: (state, {payload}) => {
            state.instrument = payload;
        },
        
        
        
    }
});


export const {
                setPlayer,
                setAudioContext,
                setIsInitialized,
                setInstrument

            } = pianoSlice.actions;