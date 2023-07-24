//utiliza el authcontext para proveer la inf a toda la app

import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"


// const initialState = {
//     logged: false,
// }

const init = () => {
  const user = JSON.parse( localStorage.getItem('user') );

  return {
    logged: !!user, //le ponemos doble negación entonces si el user existe va a ser true
    //y si existe entonces pone el user
    user: user,
  }
}

export const AuthProvider = ({children}) => {

  const [authState, dispatch] =  useReducer( authReducer, {}, init );

  const login = (name = '') => {
    
    const user = { id: 'ABC', name }

    const action = {
      type: types.login,
      payload: user
    }

    localStorage.setItem('user', JSON.stringify( user ));

    dispatch(action);
  }


  return (
    <AuthContext.Provider value={{
      ...authState, //exponemos el estado para que sea accesible para el resto de la app
      login: login //exponemos la funcion
    }}>
        {children}
    </AuthContext.Provider>
  )
}
