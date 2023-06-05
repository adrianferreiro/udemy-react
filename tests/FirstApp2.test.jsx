import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp/>', () => {
  
  const title = 'Hola, soy Goku';
  const subtitle = 123;
  
  test('Debe hacer match con el snapshot', () => {
    const {container} = render(<FirstApp title={title} subtitle={subtitle} />);
    expect(container).toMatchSnapshot();
  });
  
  test('Debe mostrar el mensaje "Hola, soy Goku"', () => {
    render(<FirstApp title={ title } subtitle={subtitle} />);
    expect(screen.getByText(title)).toBeTruthy(); //importamos screen arriba que me trae lo que se muestra en la pantalla
    //para ver lo que trae el SCREEN escribimos "screen.debug();"
  });
  
  test('Debe mostrar el título en un h1', () => {
    render(<FirstApp title={ title } subtitle={subtitle} />);
    expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
  });
  
  test('Debe mostrar el subtitulo enviado por props', () => {
    render(<FirstApp title={ title } subtitle={subtitle} />);
    expect(screen.getAllByText(subtitle).length).toBe(1);
    
  })
  
  

});
