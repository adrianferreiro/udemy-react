import { useEffect, useState } from "react"

export const Message = () => {
    const [coords, setCoords] = useState({x:0, y: 0})

  useEffect(() => {
    // first = cuerpo
    // console.log('Mensaje montado');
    // vamos a crear un listener cuando se monta el componente
    // const onMouseMove = (event) =>{
    const onMouseMove = ({x,y}) =>{//desestructuramos x e y del event
        const coords = { x, y };
        // console.log(coords);
        setCoords(coords);
    }
    // window.addEventListener('mousemove', (event)=>{
    //     console.log(event.x, event.y);
    // });
    window.addEventListener('mousemove', onMouseMove);
    
    
    return () => {
        // second = se ejecuta cuando se desmonta
        //en éste ej lo que hicimos fue mostrar un mensaje cuando el campo de texto usuario
        //coincidía con "strider2" entonces el mensaje aparecía o desaparecía, es decir
        //se montaba o desmontaba
        // console.log('Mensaje desmontado');
        window.removeEventListener('mousemove', onMouseMove);

    }
  }, []);
  
  return (
    <>
        <h3>Usuario ya existe</h3>
        { JSON.stringify( coords ) }
    </>
    )
}
