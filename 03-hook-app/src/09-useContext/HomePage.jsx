import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const HomePage = () => {

    const {user} = useContext(UserContext);

    return (
      <>
          {/* user?.name ... imprime el nombre solamente si existe */}
          <h1>HomePage <small>{user?.name}</small></h1>
          <hr />
          <pre>
            {JSON.stringify(user, null, 3)} 
            {/* null de replace 3 posiciones */}
          </pre>
      </>
      )
  }