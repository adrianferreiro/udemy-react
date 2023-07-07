//utiliza el authcontext para proveer la inf a toda la app

import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"


const initialState = {
    logged: false,
}

export const AuthProvider = ({children}) => {

  const [authState, dispatch] =  useReducer( authReducer, initialState );


  return (
    <AuthContext.Provider value={{}}>
        {children}
    </AuthContext.Provider>
  )
}
