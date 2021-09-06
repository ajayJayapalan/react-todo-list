import { useReducer, useState } from "react";
import TodoContext from "./todo-context";
import todoReducer from "./todo-reducer";
import {
  ADD_TODO,
  DONE_TODO,
  UNDONE_TODO,
  DELETE_TODO,
  UPDATE_TODO
} from "./todo-actions";

const TodoProvider = (props) => {
  const initialState = {
    todos: [] // {id: 123, title: "title", desc="description", complete=false}
  };

  const [todoState, todoDispatch] = useReducer(todoReducer, initialState);
  const [isEdit, setIsEdit] = useState({ status: false, id: null });
  // useEffect(() => {
  //   console.log(todoState);
  // }, [todoState]);

  // Add todo
  const addTodoHandler = (todo) => {
    todoDispatch({ type: ADD_TODO, payload: todo });
  };

  // Done todo
  const doneTodoHandler = (todoId) => {
    todoDispatch({ type: DONE_TODO, payload: todoId });
  };

  // Undone todo
  const unDoneTodoHandler = (todoId) => {
    todoDispatch({ type: UNDONE_TODO, payload: todoId });
  };

  // Delete todo
  const deleteTodoHandler = (todoId) => {
    todoDispatch({ type: DELETE_TODO, payload: todoId });
  };

  // Update todo
  const updateHandler = (todo) => {
    todoDispatch({ type: UPDATE_TODO, payload: todo });

    setIsEdit({ status: false, id: null });
  };

  // Edit todo
  const editTodoHandler = (todoId) => {
    //console.log(todoId);
    setIsEdit({ status: true, id: todoId });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: todoState.todos,
        onAdd: addTodoHandler,
        onDone: doneTodoHandler,
        onUnDone: unDoneTodoHandler,
        onDelete: deleteTodoHandler,
        onEdit: editTodoHandler,
        onUpdate: updateHandler,
        isEdit
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
