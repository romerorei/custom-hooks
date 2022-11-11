import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [];
  // {
  //   id: new Date().getTime(),
  //   description: 'Recolectar la piedra del alma',
  //   done: false,
  // },

const init = () => {
return JSON.parse( localStorage.getItem( 'todos' )) || [];
}

export const useTodos = () => {

  const [todos, dispatch] = useReducer( todoReducer, [], init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ) );

  }, [todos])


  const handleNewTodo = ( todo ) => {
    const action = {
      type: '[TODO] Add ToDo',
      payload: todo
    }
    dispatch( action );
  }

  const handleDeleteTodo = ( id ) => {
    dispatch({
      type: '[TODO] Remove ToDo',
      payload: id
    });
  }

  const handleToggleTodo = ( id ) => {
   // console.log({ id })
    dispatch({
      type: '[TODO] Toggle ToDo',
      payload: id
    });
  }

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo=> !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  }



}
