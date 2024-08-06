import { fireEvent, render, screen } from "@testing-library/react"
import { LoadingPiano } from "../../src/components/LoadingPiano"


describe('Pruebas en <LoadingPiano>', () => { 

    test('debe de renderizar el botón y el isInitialized debe de estar en false', () => { 

        const {component} = render(<LoadingPiano onStart={() => {}} isInitialized={false}/>)

        expect(screen.getByText('Start playing')).toBeTruthy();

        expect(screen.getByRole('button')).toBeTruthy();

        expect(component).toMatchSnapshot();

     });

     test('no debe de renderizar el componente si el isInitialized está en true', () => { 

        render(<LoadingPiano onStart={() => {}} isInitialized={true}/>)

        expect(screen.queryByText('Start playing')).toBeNull();

        expect(screen.queryByRole('button')).toBeNull();

     });


     test('debe de llamar el onStart cuando se de click en el botón', () => { 
        const mockOnStart = jest.fn();
        render(<LoadingPiano onStart={mockOnStart} isInitialized={false}/>)

        const button = screen.getByRole('button');

        fireEvent.click(button);

        expect(mockOnStart).toHaveBeenCalled();

     });

     

 })