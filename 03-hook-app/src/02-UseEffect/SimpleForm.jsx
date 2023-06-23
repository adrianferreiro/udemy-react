import { useEffect, useState } from "react"

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'adrian@google.com'
    });

    const {username, email} = formState;

    const onInputChange = ({target}) =>{
        // const onInputChange = (event) =>{
        // console.log(event);//para ver todo lo que trae el evento
        // console.log(event.target.value);//dentro del evento tenemos el target y dentro del target el value y el name
        const {name, value} = target;
        // console.log({name, value});
        setFormState({
            ...formState,
            [name] : value//existe en javascript las propiedades computadas de los objetos
        });
    }

    //use effects .. es utilizado para disparar efectos secundarios
    //useEffect recibe una funcion como argumento
    //es decir que es una función que internamente tiene un callback que se va a ejecutar cada vez que
    //el useeffect se dispare
    //el useEffect se va a llamar cada vez que se cambie el estado (useState)
    // useEffect(()=>{
    //     console.log('useEffect called!');
    // });
    //tenemos que poner una dependencia al useEffect y es el sgundo argumento que le vamos a pasar
    //las dependencias son las condiciones por las cuales queremos que el useEffect se vuelva a disparar
    
    //****************************************************** */
    //Si pasamos los corchetes como segundo parámetro, se dispara una sola vez cuando el componente es randerizado
      //seEffect(()=>{
        //     console.log('useEffect called!');
        // }, []);
    //****************************************************** */
    //REACT recomienda hacer un useEffect por cada efecto secundario que queremos disparar

    useEffect(()=>{
        console.log('useEffect called!');
    }, []);//vacío => se dispara una sola vez, cuando se randeriza el componente
    
    useEffect(()=>{
        console.log('formState change!');
    }, [formState]);//en éste caso se dispara cada vez que haya un cambio en el formState
    
    
    useEffect(()=>{
        console.log('email change!');
    }, [email]);//se dispara cuando cambia el email
    //si cambiamos el email, tambien cambia el formstate así que se ejecutan los dos
    

    

  return (
    <>
        <h1>Simple Form </h1>
        <hr />
        <input
            type="text" 
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}
            //mandamos como referencia el input change
            //el evento que dispara la caja de texto va a pasar como el primer argumento
        />
        <input
            type="email" 
            className="form-control mt-2"
            placeholder="adrian_ferreiro@gmail.com"
            name="email"
            value={email}
            onChange={onInputChange}
        />
    </>
   )
}
