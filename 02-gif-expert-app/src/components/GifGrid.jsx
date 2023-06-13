import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid =  ({category}) => {
  //useEffect:
  //* primer argumento es la función que queremos ejecutar una solavez
  //* segundo argumento es la lista [] de condiciones que se deben cumplir para que se ejecute la función

  const [images, setImages] = useState([]);  

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  }

  useEffect  ( ()  => {
    getImages();
  }, [])
  return (
  <>
      <h3>{category}</h3>
      <ol>

        {
          images.map(({id, title}) => (
            <li key={id}> {title} </li>
          ))

        }
      </ol>
  </>
  )
}