import { registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = ( email, password ) => {
    return async ( dispatch ) => {

        dispatch(checkingCredentials());

    }
}

export const StartGoogleSignInc = () => {
    return async ( dispatch ) => {

        dispatch(checkingCredentials());

        const result = await signInWithGoogle();
        // console.log({result});
        if(!result.ok) return dispatch(logout(result.errorMessage)); //Return para que no siga ejecutando

        //si todo sale bien
        //si mandamos el result mandamos con el OK
        //podemos eliminar esa propiedad con delete result.ok
        dispatch(login(result));

    }
}

//creamos un nuevo thunk para el proveedor que creamos
export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {

    return async(dispatch) =>{

        dispatch(checkingCredentials()); //cambiamos el estado para mostrar el loading
        const resp = await  registerUserWithEmailPassword({ email, password, displayName });
        console.log(resp);
    }

}