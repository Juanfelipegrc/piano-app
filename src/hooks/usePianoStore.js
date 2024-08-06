import { useDispatch, useSelector } from "react-redux"
import { setAudioContext, setInstrument, setIsInitialized, setPlayer } from "../store/slices/pianoSlice";

export const usePianoStore = () => {
  

    const state = useSelector(state => state.piano);
    const dispatch = useDispatch();


    const onSetPlayer = (player) => {
        dispatch(setPlayer(player))
    }

    const onSetAudioContext = (audioContext) => {
        dispatch(setAudioContext(audioContext))
    }

    const onSetIsInitialized = (isInitialized) => {
        dispatch(setIsInitialized(isInitialized))
    }

    const onSetInstrument = (instrument) => {
        dispatch(setInstrument(instrument))
    }
    

    return{
        onSetPlayer,
        onSetAudioContext,
        onSetIsInitialized,
        onSetInstrument,
        ...state
    }


}
