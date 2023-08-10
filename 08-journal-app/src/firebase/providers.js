import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
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

//vamos a crear un nuevo proveedor para registrarse con usuario y password
export const registerUserWithEmailPassword = async ( { email, password, displayName } ) =>{
    try {
        
        //tenemos que llegar a firebase usando la siguiente función
        //le pasamos como primer argumento el FirebaseAuth de arriba
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        //si todo sale bien desestructuramos del resultado el uid y el photoURL
        const { uid, photoURL } = resp.user;
        console.log(resp);

        //actualizar el displayName en Firebase, también podemos actualizar PHOTOURL
        //USAMOS updateProfile de firebase y le asignamos el usuario actual
        await updateProfile(FirebaseAuth.currentUser, { displayName });


        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {
        // console.log(error);
        //acá podemos ver el status code del error para personalizar nuestros mensajes de error
        return {ok: false, errorMessage: error.message}
    }
}

export const loginWithEmailPassword = async ({ email, password }) => {
    try {
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL, displayName } = resp.user;

        return {
            ok: true,
            uid, photoURL, displayName
        }
        
    } catch (error) {
        return {ok: false, errorMessage: error.message}
    }
}

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
}