import { useEffect, useReducer, useState } from "react";

import {
  getTodoHandler,
  postTodoHandler,
  patchTodoHandler,
  deleteMethodTodoHandler
} from "./http-axios";

import HTTPTodoContext from "./http-todo-context";

const HTTPTodoProvider = (props) => {
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState({ status: false, id: null });

  useEffect(() => {
    getTodoHandler().then((todos) => setTodos(todos));
  }, []);

  // useEffect(() => {
  //   console.log("effect", todos);
  // }, [todos]);

  // Done , Not Done toggle
  const patchHelper = (payload, todoId) => {
    const [todo] = todos.filter((todo) => todo.id === todoId);
    patchTodoHandler(todoId, payload).then((data) => {
      const newTodo = data.hasOwnProperty("complete") && { ...todo, ...data };
      if (newTodo) {
        const todoClone = todos.filter((todo) => todo.id !== todoId);
        setTodos([...todoClone, newTodo]);
      }
    });
  };

  // Add todo
  const addTodoHandler = (todo) => {
    postTodoHandler(todo)
      .then((data) => console.log("provider", data))
      .then(() => {
        getTodoHandler().then((todos) => setTodos(todos));
      });
  };

  // Done todo
  const doneTodoHandler = (todoId) => {
    const payload = { complete: true };
    patchHelper(payload, todoId);
  };

  // Undone todo
  const unDoneTodoHandler = (todoId) => {
    const payload = { complete: false };
    patchHelper(payload, todoId);
  };

  // Delete todo
  const deleteTodoHandler = (todoId) => {
    deleteMethodTodoHandler(todoId).then(() => {
      getTodoHandler().then((todos) => setTodos(todos));
    });
  };

  // Update todo
  const updateHandler = (todo) => {
    patchHelper(todo, todo.id);
    setIsEdit({ status: false, id: null });
  };

  // Edit todo
  const editTodoHandler = (todoId) => {
    //console.log(todoId);
    setIsEdit({ status: true, id: todoId });
  };

  return (
    <HTTPTodoContext.Provider
      value={{
        todos: todos,
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
    </HTTPTodoContext.Provider>
  );
};

export default HTTPTodoProvider;
