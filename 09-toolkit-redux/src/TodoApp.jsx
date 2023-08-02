import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosApi";

export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1);

    // const { data: todos = [], isLoading } = useGetTodosQuery(); //data: todos dice que desestructura data y renombra a "todos"
    // console.log(algo); //imprimimos para ver que es lo que podemos desestructurar (data, isLoading, isFetching)
    const { data: todo, isLoading } = useGetTodoQuery(todoId); 


    const nextTodo = () => {
        setTodoId( todoId + 1 );
    }

    const prevTodo = () => {
        if(todoId === 1) return;
        setTodoId( todoId - 1 );
    }

  return (
        <>
        {/* RTK QUERY (REDUX TOOLKIT: Sirve para controlar las peticiónes http y optimizarlas) */}
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading: { isLoading ? 'True' : 'False' } </h4>

            <pre> { JSON.stringify( todo ) } </pre>

            <button onClick={prevTodo} >Prev Todo</button>
            <button onClick={nextTodo} >Next Todo</button>

            {/* <ul>
                { todos.map ( todo => (
                        <li key={todo.id} >
                            <strong> { todo.completed ? 'Done' : 'Pending' } </strong>
                            { todo.title }
                        </li>
                    ))
                }
            </ul> */}

        </>
    )
}
