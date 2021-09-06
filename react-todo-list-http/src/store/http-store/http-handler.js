// get todos
const getTodoHandler = async () => {
  const todos = await fetch(
    "https://react-todo-43df6-default-rtdb.firebaseio.com/todo.json"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const loadedTodo = [];
      for (const key in data) {
        loadedTodo.push({
          id: key,
          title: data[key].title,
          description: data[key].description,
          complete: data[key].complete
        });
      }
      // console.log(loadedTodo);
      return loadedTodo;
    });
  return todos;
};

// post todos
async function postTodoHandler(todo) {
  const response = await fetch(
    "https://react-todo-43df6-default-rtdb.firebaseio.com/todo.json",
    {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

  const data = await response.json();
  return data;
}

// patch todos
async function patchTodoHandler(todoId, payload) {
  const response = await fetch(
    `https://react-todo-43df6-default-rtdb.firebaseio.com/todo/${todoId}.json`,
    {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

  const data = await response.json();
  return data;
  //console.log(data);
}

// delete todos
async function deleteMethodTodoHandler(todoId) {
  const response = await fetch(
    `https://react-todo-43df6-default-rtdb.firebaseio.com/todo/${todoId}.json`,
    {
      method: "DELETE",
      body: JSON.stringify(null),
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

  const data = await response.json();
  return data;
  //console.log(data);
}

export {
  postTodoHandler,
  getTodoHandler,
  patchTodoHandler,
  deleteMethodTodoHandler
};
