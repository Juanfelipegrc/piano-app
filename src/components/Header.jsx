import React from 'react'
import { usePianoStore } from '../hooks/usePianoStore'

export const Header = () => {

    const {onSetInstrument} = usePianoStore();

    const onChangeInstrument = ({target}) => {
        onSetInstrument(target.value)
    }

  return (
    <div className='container-fluid bg-black text-light p-3 d-flex justify-content-center align-items-center'>
        <h1 className='m-0 mr-2'>PIANO APP</h1>
        <form style={{height:'30px'}} className='flex-grow-1 ms-2'>
            <select className='form-select form-select-sm' name="instrument" id="instrument-select" onChange={onChangeInstrument}>
                <option value="acoustic_grand_piano">Piano</option>
                <option value="electric_guitar_jazz">Guitar</option>
                <option value="violin">Violin</option>
                <option value="trumpet">Trumpet</option>
                <option value="soprano_sax">Saxophone</option>
            </select>
        </form>

    </div>
  )
}
