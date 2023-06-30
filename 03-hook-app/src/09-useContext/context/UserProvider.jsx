import { UserContext } from "./UserContext"


const user = {
    id: 123,
    name: 'Fernando Herrera',
    email: 'adrian@gmail.com'
}

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{hola: 'Mundo', user: user}} >
        {/* randerizamos los childrens que vienen en las props */}
        {children} 
    </UserContext.Provider>
  )
}
