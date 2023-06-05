import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp/>', () => {
  test('Debe hacer match con el snapshot', () => {
    //yo le voy a tomar una fotografía a mi componente así como se randeriza con las properties por defecto
    //y si algo llega a cambiar entonces esa prueba va a fallar
    //vamos a usar render para randerizar el componente en memoria
    const title = 'Hola, soy Goku';
    const subtitle = 456;
    render(<FirstApp title={title} subtitle={subtitle} />);
    //ahora hacemos las aserciones
  })
  
})
