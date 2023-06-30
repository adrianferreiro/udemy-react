import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [] ;
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) )
      
    }, [todos])
    

    const handleNewTodo = (todo) =>{
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        //dispatch es la función que voy a usar para mandar para mandar ACTION
        dispatch(action);
    }

    const handleDeleteTodo = (id) =>{
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        });
    }
    
    const handleToggleTodo = (id) =>{
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        });
    }

    const todosCount = () =>{
        return todos.length;
    }
    
    const pendingTodosCount = ()=>{
        return todos.filter(todo=> !todo.done).length;
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount,
    }

}
