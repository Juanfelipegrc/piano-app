import { fireEvent, render, screen } from "@testing-library/react";
import { PianoKey } from "../../src/components/PianoKey";

describe('Pruebas en <PianoKey/>', () => { 
    const notes = ['C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3'];
    const mockPlaySound = jest.fn();

   test('debe de renderizar correctamente las teclas blancas', () => { 

    render(<PianoKey notes={notes} playSound={mockPlaySound}/>);

    const noteWhites = notes.filter(note => !note.includes('#'));

    noteWhites.forEach(note => {
        expect(screen.getByText(note)).toBeTruthy();
    });
    

    });

    test('debe de renderizar correctamente las teclas negras', () => { 

        render(<PianoKey notes={notes} playSound={mockPlaySound}/>);
    
        const noteWhites = notes.filter(note => note.includes('#'));
    
        noteWhites.forEach(note => {
            expect(screen.getByText(note)).toBeTruthy();
        });
        
    
    });

    test('debe de llamar el mockPlaySound cuando se de click a la tecla blanca respectiva a la nota', () => { 

        render(<PianoKey notes={notes} playSound={mockPlaySound}/>);

        const whiteKey = screen.getByText('C3');
        fireEvent.mouseDown(whiteKey);

        expect(mockPlaySound).toHaveBeenCalledWith('C3');

    });

    test('debe de llamar el mockPlaySound cuando se de click a la tecla negra respectiva a la nota', () => { 

        render(<PianoKey notes={notes} playSound={mockPlaySound}/>);

        const blackKey = screen.getByText('C#3');
        fireEvent.mouseDown(blackKey);

        expect(mockPlaySound).toHaveBeenCalledWith('C#3');

     });

 })