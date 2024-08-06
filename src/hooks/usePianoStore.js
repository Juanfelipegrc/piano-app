import { useDispatch, useSelector } from "react-redux"
import { setAudioContext, setInstrument, setIsInitialized, setPlayer } from "../store/slices/pianoSlice";

export const usePianoStore = () => {
  

    const state = useSelector(state => state.piano);
    const dispatch = useDispatch();


   
    const onSetIsInitialized = (isInitialized) => {
        dispatch(setIsInitialized(isInitialized))
    }

    const onSetInstrument = (instrument) => {
        dispatch(setInstrument(instrument))
    }
    

    return{

        onSetIsInitialized,
        onSetInstrument,
        ...state
    }


}
