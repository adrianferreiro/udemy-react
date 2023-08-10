import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth/authSlice";

export const useCheckAuth = () => {
    const { status } = useSelector( state => state.auth );

    //hacemos el dispatch para hacer el login del user que obtenemos en onAuthStateChanged
    const dispatch = useDispatch();

    //tengo que disparar un efecto que automáticamente revise si la persona está autenticada o no
    useEffect(() => {
        
        //firebase nos ofrece una opcion para estar pendientes de los cambios del usuario
        //se dispara cada vez que el estado de autenticación cambia ((OBSERVER))
        onAuthStateChanged( FirebaseAuth, async ( user ) => {
            // console.log(user);
            if( !user ) return dispatch( logout() );
            //puedo mandar el user completo y va a ocupar lo que necesita
            //pero en éste ejemplo vamos a desetructurar
            const { uid, email, displayName, photoURL } = user;

            //si tengo un usuario entonces login
            dispatch( login({
                uid, email, displayName, photoURL
            }) );

        });
    
        //saco el return porque no voy a necesitar hacer ninguna limpieza
        //porque nuestro approuter siempre va a estar pendiente de la autenticación
        // return () => {
        //   second
        // }
    // }, [third]) //saco porque no voy a necesitar ninguna dependencia
    }, []);

    return status

}
