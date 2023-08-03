import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login } from "./authSlice"

export const checkingAuthentication = ( email, password ) => {
    return async ( dispatch ) => {

        dispatch(checkingCredentials());

    }
}

export const StartGoogleSignInc = () => {
    return async ( dispatch ) => {

        dispatch(checkingCredentials());

        const result = await signInWithGoogle();
        console.log({result});

    }
}