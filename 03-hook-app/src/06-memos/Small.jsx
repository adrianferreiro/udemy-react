 import {memo} from 'react';
//el memo es una función que le dice a React: memoriza éste componente
//envolvemos todo el componente que queresmos memorizar en el memo, es decir que
//el memo recibe como argumento el componente que queremos memorizar
//ENTONCES solamente se va a redibujar si es que "value" sufre una modificación

export const Small = memo(({value}) => {
    //en el ejercicio vemos como se redibuja éste componente cuando hay cambio en el componente padre y
    //vamos a evitar que eso pase con el ejemplo
    //para ver el error, creamos otro boton "show/hide" sin que modifique el valor del "value" y
    //pudimos ver como se volvía a dibujar y solamente había cambios en el componente padre
    console.log('Me volví a redibujar =(');
  return (
    <small>{value}</small>
  )
})
