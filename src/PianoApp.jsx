import React, { useEffect, useRef, useState } from 'react';
import { HotKeys } from "react-hotkeys";
import * as Soundfont from 'soundfont-player';
import { LoadingPiano, PianoKey } from './components/';
import {usePianoStore} from './hooks/usePianoStore'
import { Header } from './components/Header';
import Swal from 'sweetalert2';

const keyMap = {
  C3: 'z',
  'C#3': 's',
  D3: 'x',
  'D#3': 'd',
  E3: 'c',
  F3: 'v',
  'F#3': 'g',
  G3: 'b',
  'G#3': 'h',
  A3: 'n',
  'A#3': 'j',
  B3: 'm',
  C4: 'a',
  'C#4': 'w',
  D4: 's',
  'D#4': 'e',
  E4: 'd',
  F4: 'f',
  'F#4': 't',
  G4: 'g',
  'G#4': 'y',
  A4: 'h',
  'A#4': 'u',
  B4: 'j',
  C5: 'k',
  'C#5': 'o',
  D5: 'l',
  'D#5': 'p',
  E5: ';',
  F5: '[',
  'F#5': ']',
  G5: '\\',
  'G#5': '1',
  A5: '2',
  'A#5': '3',
  B5: '4',
};

const keyMapArray = [
  {
    C3: 'z',
  'C#3': 's',
    D3: 'x',
    'D#3': 'd',
    E3: 'c',
  },
  {
    F3: 'v',
    'F#3': 'g',
    G3: 'b',
    'G#3': 'h',
    A3: 'n',
    'A#3': 'j',
    B3: 'm',
  },
  {
    C4: 'a',
    'C#4': 'w',
    D4: 's',
    'D#4': 'e',
    E4: 'd',
  },
  {
    F4: 'f',
    'F#4': 't',
    G4: 'g',
    'G#4': 'y',
    A4: 'h',
    'A#4': 'u',
    B4: 'j',
  },
  {
    C5: 'k',
    'C#5': 'o',
    D5: 'l',
    'D#5': 'p',
    E5: ';',
  },
  {
    F5: '[',
    'F#5': ']',
    G5: '\\',
    'G#5': '1',
    A5: '2',
    'A#5': '3',
    B5: '4',
  }
  
  
];

export const PianoApp = () => {
  const { isInitialized, instrument, onSetIsInitialized, onSetInstrument} = usePianoStore();

  const [player, setPlayer] = useState(null);
  const [actualWidth, setActualWidth] = useState(window.innerWidth);
  const [audioContext, setAudioContext] = useState(null);

 

  

  const initAudio = async (instrumentName) => {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    setAudioContext(context);

    try {
      
      const pianoPlayer = await Soundfont.instrument(context, instrumentName, { gain: 5.0 });
      setPlayer(pianoPlayer);
    } catch (error) {
      console.error('Error loading instrument:', error);
    }
  };


  const handleUserGesture = async () => {
    if (!isInitialized) {
      await initAudio(instrument);
      onSetIsInitialized(true);
    } else if (audioContext && audioContext.state === 'suspended') {
      await audioContext?.resume();
    }

    
    
  };

  const playSound = (note) => {
    if (player) {
      player.play(note);
    }
  };

  const handlers = {};

  Object.keys(keyMap).forEach(note => {
    handlers[note] = () => playSound(note)
  })

  useEffect(() => {

    if(isInitialized && actualWidth <= 768){
    Swal.fire({
        title: 'IMPORTANT',
        text: "If you can't hear the piano sound, please disable Silent Mode or raise the volume.",
        icon: 'info'
    });
    }
    
  }, [isInitialized]);


  useEffect(() => {

    const handleResize = () => {
      setActualWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, [])
  



  useEffect(() => {
    if(isInitialized){
      initAudio(instrument)
    }
  }, [instrument, isInitialized])
  

  return (
    <div className='container-fluid vh-100 bg-primary p-0 m-0 overflow-hidden'>
      <Header/>
        <div className='piano-container-height d-flex justify-content-center align-items-center '>
          <HotKeys style={{
                flex: 1,
                overflow: 'auto',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }} 
              keyMap={keyMap} 
              handlers={handlers}
            >
              <LoadingPiano onStart={handleUserGesture} isInitialized={isInitialized}/>
              <div className='container-fluid w-100 d-flex justify-content-center align-items-center'>
                <PianoKey notes={Object.keys(keyMap)} notesArray={keyMapArray} playSound={playSound} />
              </div>
            </HotKeys>
        </div>
    </div>
  );
};
