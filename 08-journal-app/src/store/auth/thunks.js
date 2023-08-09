import { loginWithEmailPassword, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
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
        // const resp = await  registerUserWithEmailPassword({ email, password, displayName });
        const {ok, uid, photoURL, errorMessage} = await  registerUserWithEmailPassword({ email, password, displayName });
        // console.log(resp);
        if(!ok) return dispatch(logout({errorMessage}));//error

        //si todo sale bien .. logueamos al usuario
        dispatch(login({uid, displayName, email, photoURL}));
    }

}

export const startLoginWithEmailPassword = ({email, password}) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        const result = await loginWithEmailPassword({email, password});
        console.log(result);
        if ( !result.ok ) return dispatch ( logout( result ) );
        dispatch( login( result ) );
    }
}
