
export const ShowIncrement = ({increment}) => {

    //en este ejemplo mostró que si queremos memorizar el boton "incrementar" con useMemo no funciona
    //porque la función que le pasamos, si bien es "increment", en javascript cambia de valor en memoria
    //y entonces no la toma como la misma y vuelve a redibujar el botón, que es lo que tratamos de evitar.
  return (
    <button 
        className="btn btn-primary"
        onClick={()=> {
            increment();
        }}
    >
        Incrementar
    </button>
  )
}
