import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp/>', () => {

  // test('Debe hacer match con el snapshot', () => {
  //   //yo le voy a tomar una fotografía a mi componente así como se randeriza con las properties por defecto
  //   //y si algo llega a cambiar entonces esa prueba va a fallar
  //   //vamos a usar render para randerizar el componente en memoria
  //   const title = 'Hola, soy Goku';
  //   const subtitle = 456;
  //   //el render retorna un objeto para ver ciertas propiedades. Por ejemplo el container
  //   const {container} = render(<FirstApp title={title} subtitle={subtitle} />);
  //   expect(container).toMatchSnapshot();//crea una carpeta de snapshot
  //   //ahora hacemos las aserciones
  // });
  
  test('Debe mostrar el título en un h1', () => {
    const title = 'Hola, soy Goku';
    const subtitle = 456;
    const {container, getByText, getByTestId} = render(<FirstApp title={title} subtitle={subtitle} />);
    expect(getByText(title)).toBeTruthy(); //es decir que se encuentre el texto
    // const h1 = container.querySelector('h1');
    // //console.log(h1.innerHTML);
    // expect(h1.innerHTML).toContain(title); // usamos toContain para asegurarnos que tenga el texto .. porque puede que haya espacios 
    expect(getByTestId('test-title').innerHTML).toContain(title);
  });
  
  test('Debe mostrar el subtitulo enviado por props', () => {
    const title = 'Hola, soy Goku';
    const subtitle = 123;
    const {getByText} = render( // getByText verifica que haya uno
    //const {getAllByText} = render(//verifica que haya 
      <FirstApp
       title={title}
       subtitle={subtitle}
       />
    );
  })
  
  
  
})
