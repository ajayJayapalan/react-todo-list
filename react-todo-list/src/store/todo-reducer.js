import {
  ADD_TODO,
  DONE_TODO,
  UPDATE_TODO,
  UNDONE_TODO,
  DELETE_TODO
} from "./todo-actions";

// const getTodoId = (prev, todoId) => {
//   return prev.todos.filter((todo) => todo.id === todoId)[0];
// };

// {id: 123, title: "title", desc="description", complete=false}
const todoReducer = (prevState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...prevState,
        todos: [...prevState.todos, action.payload]
      };
    case DONE_TODO:
      return {
        ...prevState,
        todos: prevState.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, complete: true };
          } else {
            return todo;
          }
        })
      };
    case UNDONE_TODO:
      return {
        ...prevState,
        todos: prevState.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, complete: false };
          } else {
            return todo;
          }
        })
      };
    case DELETE_TODO:
      return {
        ...prevState,
        todos: prevState.todos.filter((todo) => todo.id !== action.payload)
      };
    case UPDATE_TODO:
      return {
        ...prevState.payload,
        todos: prevState.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return action.payload;
          } else {
            return todo;
          }
        })
      };
    default:
      return prevState;
  }
};

export default todoReducer;
