import { useLayoutEffect, useRef, useState } from "react"

export const Quotes = ({quote, author}) => {

  const pRef = useRef();

  const [boxSize, setBoxSize] = useState({width: 0, height: 0});

  useLayoutEffect(() => {
  //vamos a obtener el tamaño de la caja después de que se randerizó
  const {width, height} = pRef.current.getBoundingClientRect();
  // console.log({width, height});
    setBoxSize(width,height);
  }, [quote])
    
  return (
    <>
        <blockquote 
          className="blockquote text-end"
          style={{display: 'flex', width: boxSize.width, height: boxSize.height}}
          >
            <p ref={pRef} className="mb-1"> {quote} </p>
            <footer className="blockquote-footer">
            {author}
            </footer>
        </blockquote>
        <code>{JSON.stringify(boxSize)}</code>
    </>
   )
}
