import { useEffect } from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCustomForm = () => {
    

    const {formState, onInputChange, username, email, password} = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const {username, email, password} = formState;



  return (
    <>
        <h1>Formulario con custom Hook </h1>
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
        <input
            type="password" 
            className="form-control mt-2"
            placeholder="Contraseña"
            name="password"
            value={password}
            onChange={onInputChange}
        />
    </>
   )
}
