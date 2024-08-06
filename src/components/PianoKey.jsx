import React from 'react';
import { PianoKeyBlack } from './PianoKeyBlack';

export const PianoKey = ({ notes, playSound }) => {
  const whiteKeys = notes.filter(note => !note.includes('#'));
  const blackKeys = notes.filter(note => note.includes('#'));

  const validate = (noteWhite) => {
    const noteBase = noteWhite.slice(0, -1); // Extract the note base (C, D, E, etc.)
    const noteOctave = noteWhite.slice(-1); // Extract the octave (3, 4, 5, etc.)
    return blackKeys.find(blackKey => 
      blackKey.includes(noteBase) && blackKey.includes(noteOctave)
    );
  };

  return (
    <div className='container-fluid d-flex  justify-content-center'>
      {
        whiteKeys.map((noteWhite, index) => (
          <div 
            key={index}
            className='bg-white position-relative'
            style={{
              width: '45px',
              height: '200px',
              border: 'solid 2px black',
              margin: '0 1px'
            
            }}
            onMouseDown={() => playSound(noteWhite)}
          >
            {noteWhite}
            {
              validate(noteWhite) && (
                <PianoKeyBlack 
                  note={validate(noteWhite)}
                  playSound={playSound}
                  
                />
              )
            }
          </div>
        ))
      }
    </div>
  );
};
