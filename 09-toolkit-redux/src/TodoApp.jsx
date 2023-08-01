import { useGetTodosQuery } from "./store/apis/todosApi";

export const TodoApp = () => {


    const { data: todos = [], isLoading } = useGetTodosQuery(); //data: todos dice que desestructura data y renombra a "todos"
    // console.log(algo); //imprimimos para ver que es lo que podemos desestructurar (data, isLoading, isFetching)

  return (
        <>
        {/* RTK QUERY (REDUX TOOLKIT: Sirve para controlar las peticiónes http y optimizarlas) */}
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading: { isLoading ? 'True' : 'False' } </h4>

            <pre>...</pre>

            <ul>

                { todos.map ( todo => (
                    <li key={todo.id} >
                        <strong> { todo.completed ? 'Done' : 'Pending' } </strong>
                        { todo.title }
                    </li>
                )

                )

                }

            </ul>

            <button>Next Todo</button>
        </>
    )
}
