import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  
    const [counter, setCounter] = useState(10);

    //useCallback es como el memo pero se utiliza para memorizar funciones que solamente se va a volver a ejecutar cuando
    //algo cambie
    const incrementFather = useCallback(
      () => {
        setCounter((value)=> value + 1);
      },
      [],
    )

    //otro uso
    useEffect(() => {
    //   incrementFather();
    }, [incrementFather]);
    
    


    // const incrementFather = ()=>{
    //     setCounter(counter + 1);
    // }
  
    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={incrementFather} />
        </>
   )
}
