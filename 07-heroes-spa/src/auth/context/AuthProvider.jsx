//utiliza el authcontext para proveer la inf a toda la app

import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"


const initialState = {
    logged: false,
}

export const AuthProvider = ({children}) => {

  const [authState, dispatch] =  useReducer( authReducer, initialState );

  const login = (name = '') => {
    
    const action = {
      type: types.login,
      payload: {
        id: 'ABC',
        name: name,
      }
    }

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
