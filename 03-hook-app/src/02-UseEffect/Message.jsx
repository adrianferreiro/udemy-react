import { useEffect } from "react"

export const Message = () => {

  useEffect(() => {
    // first = cuerpo
    console.log('Mensaje montado');
    
    
    return () => {
        // second = se ejecuta cuando se desmonta
        //en éste ej lo que hicimos fue mostrar un mensaje cuando el campo de texto usuario
        //coincidía con "strider2" entonces el mensaje aparecía o desaparecía, es decir
        //se montaba o desmontaba
        console.log('Mensaje desmontado');
    }
  }, []);
  
  return (
    <>
        <h3>Usuario ya existe</h3>
    </>
    )
}
