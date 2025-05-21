import React, { useEffect, useState } from 'react';
import { PianoKeyBlack } from './PianoKeyBlack';

export const PianoKey = ({ notes, notesArray, playSound }) => {
  const [actualWidth, setActualWidth] = useState(window.innerWidth);
  

  const validate = (noteWhite, blackKeys) => {
    const noteBase = noteWhite.slice(0, -1); // Extract the note base (C, D, E, etc.)
    const noteOctave = noteWhite.slice(-1); // Extract the octave (3, 4, 5, etc.)
    return blackKeys.find(blackKey => 
      blackKey.includes(noteBase) && blackKey.includes(noteOctave)
    );
  };

  useEffect(() => {

    const handleResize = () => {
      setActualWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, [])



  return (
    <div className={'h-100 d-flex justify-content-center align-items-center gap-0 flex-wrap'}>
      
      

        {
          notesArray.map((group, indexGroup) => {
            const whiteKeys = Object.keys(group).filter(note => !note.includes('#'));
            const blackKeys = Object.keys(group).filter(note => note.includes('#'));


       
            return (
              <div key={indexGroup} className='d-flex m-0 p-0 justify-content-center'>
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
                        validate(noteWhite, blackKeys) && (
                          <PianoKeyBlack 
                            note={validate(noteWhite, blackKeys)}
                            playSound={playSound}
                            
                          />
                        )
                      }
                    </div>
                  ))
                  }
                
              </div>
            )
          })

        }
            
          
    </div>
  );
};
