import { fireEvent, render, screen  } from "@testing-library/react";
import { usePianoStore } from "../../src/hooks/usePianoStore"
import { Header } from "../../src/components/Header";

jest.mock('../../src/hooks/usePianoStore');

describe('Pruebas en <Header/>', () => { 

    test('debe de renderizar correctamente todo', () => { 

        usePianoStore.mockReturnValue(({
            onSetInstrument: jest.fn(),
        }));

        const {component} = render(<Header/>);

        expect(screen.getByText('PIANO APP')).toBeTruthy();


        expect(screen.getByRole('combobox')).toBeTruthy();

        expect(component).toMatchSnapshot();

     });

     test('debe de llamar el onSetInstrument cuando cambie el instrumento en el <select></select>', () => { 

        const mockOnSetInstrument = jest.fn();

        usePianoStore.mockReturnValue(({
            onSetInstrument: mockOnSetInstrument,
        }));

        render(<Header/>);

        const selectElement = screen.getByRole('combobox');

        fireEvent.change(selectElement, {
            target: {
                value: 'electric_guitar_jazz'
            }
        });

        expect(mockOnSetInstrument).toHaveBeenCalledWith('electric_guitar_jazz')



     });
     

})