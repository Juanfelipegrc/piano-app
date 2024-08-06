import { configureStore } from "@reduxjs/toolkit"
import { pianoSlice } from "../../src/store/slices/pianoSlice"
import { act, renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import { usePianoStore } from "../../src/hooks/usePianoStore";

const getMockStore = (initialState) => {
    return configureStore({
        reducer:{
            piano: pianoSlice.reducer
        }, preloadedState: {
            piano: {...initialState}
        }
    })
};

describe('Pruebas en usePianoStore', () => { 

    test('debe de retornar el estado inicial', () => { 

        const mockStore = getMockStore({
            isInitialized: false,
            instrument: 'acoustic_grand_piano'
        });

        const {result} = renderHook(() => usePianoStore(), {
            wrapper: ({children}) => <Provider store={mockStore}>
                {children}
            </Provider>
        });

        expect(result.current).toEqual({
            isInitialized: false,
            instrument: 'acoustic_grand_piano',
            onSetInstrument: expect.any(Function),
            onSetIsInitialized: expect.any(Function),
        })

     });

     test('debe de cambiar el isInitialized a true cuando se llame el onSetIsInitialized', () => { 

        const mockStore = getMockStore({
            isInitialized: false,
            instrument: 'acoustic_grand_piano'
        });

        const {result} = renderHook(() => usePianoStore(), {
            wrapper: ({children}) => <Provider store={mockStore}>
                {children}
            </Provider>
        });

        act(() => {
            result.current.onSetIsInitialized(true)
        });

        const {isInitialized, instrument} = result.current;


        expect({isInitialized, instrument}).toEqual({
            isInitialized: true,
            instrument: 'acoustic_grand_piano',
        })

     });

     test('debe de cambiar el instrument a true cuando se llame el onSetInstrument', () => { 

        const mockStore = getMockStore({
            isInitialized: false,
            instrument: 'acoustic_grand_piano'
        });

        const {result} = renderHook(() => usePianoStore(), {
            wrapper: ({children}) => <Provider store={mockStore}>
                {children}
            </Provider>
        });
        

        act(() => {

            result.current.onSetIsInitialized(true);

            result.current.onSetInstrument('electric_guitar_jazz');

            
        });

        const {isInitialized, instrument} = result.current;


        expect({isInitialized, instrument}).toEqual({
            isInitialized: true,
            instrument: 'electric_guitar_jazz',
        })

     })

 })