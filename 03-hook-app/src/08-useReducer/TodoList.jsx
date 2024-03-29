import { TodoItem } from "./TodoItem"

export const TodoList = ({todos = [], onDeleteTodo, onToggleTodo}) => {
  

  
  return (
    <ul className="list-group">
        {
            todos.map(todo => (
            // eslint-disable-next-line react/jsx-key
            <TodoItem 
              key={todo.id}
              todo={todo}
              onDeleteTodo={ onDeleteTodo }
              onToggleTodo={ onToggleTodo }
              />   
            ))
        }
    </ul>
 )
}
