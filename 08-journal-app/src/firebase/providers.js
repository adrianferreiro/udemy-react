import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider(); // creamos una instancia de la función

//creo una función que me sirva para autenticarme con google
export const signInWithGoogle = async () => {

    try {

        //le pasamos la instancia de auth que creamos en config.js
        //y el proveedor que en éste caso es google (puede ser twitter, facebook, etc.) No hay que crear la instanca, sólo mandamos el proveedor
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        //mandamos el result que creamos en la línea de arriba
        
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        //la lina de arriba nos permite obtener las credenciales, incluido el token que nos va a permitir hacer un monton de cosas con google
        // console.log(credentials);
        
        // const user = result.user;
        // console.log({user});
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            //informacion de usuario
            displayName, email, photoURL, uid
        }

        
    } catch (error) {
        // console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        return{
            ok: false,
            errorMessage, //por si quiero mostrar el error en pantalla
            

        }
        
    }

}

