import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Pruebas en <CounterApp/>', () => {
    const value = 100;
 
    test('Debe hacer match con el snapshot', () => {
      const {container} = render(<CounterApp value={value}/> );
      expect(container).toMatchSnapshot();
    });
    
    test('Debe mostrar el valor inicial de 100', () => {
        render(<CounterApp value={10}/> );
        expect(screen.getByText(10)).toBeTruthy();
        //expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain('100');
    });
    
    test('Debe incrementar con el botón +1', () => {
        render(<CounterApp value={10}/> );
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();
    });
    
    test('Debe decrementar con el botón -1', () => {
        render(<CounterApp value={10}/> );
        fireEvent.click(screen.getByText('-1'));
        //screen.debug();
        expect(screen.getByText('9')).toBeTruthy();
    });
    
    test('Debe volver al 10 con el botón Reset', () => {
        render(<CounterApp value={10}/> );
        fireEvent.click(screen.getByText('-1'));
        //fireEvent.click(screen.getByText('Reset'));
       //screen.debug();
       fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
       expect(screen.getByText(10)).toBeTruthy();
    });

})
