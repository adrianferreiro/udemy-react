import { useState } from "react"
import { UserContext } from "./UserContext"


// const user = {
//     id: 123,
//     name: 'Fernando Herrera',
//     email: 'adrian@gmail.com'
// }

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState();
  
  return (
    // <UserContext.Provider value={{hola: 'Mundo', user: user}} >
    <UserContext.Provider value={{ user, setUser }} >
        {/* randerizamos los childrens que vienen en las props */}
        {children} 
    </UserContext.Provider>
  )
}
