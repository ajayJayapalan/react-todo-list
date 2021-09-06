import axios from "axios";
const API_ENDPOINT =
  "https://react-todo-43df6-default-rtdb.firebaseio.com/todo";

const JSON_EXT = ".json";

// get todos
const getTodoHandler = async () => {
  const { data } = await axios(API_ENDPOINT + JSON_EXT);
  const loadedTodo = [];
  for (const key in data) {
    loadedTodo.push({
      id: key,
      title: data[key].title,
      description: data[key].description,
      complete: data[key].complete
    });
  }

  return loadedTodo;
};

// post todos
async function postTodoHandler(todo) {
  const { data } = await axios.post(API_ENDPOINT + JSON_EXT, todo);
  return data;
}

// patch todos
async function patchTodoHandler(todoId, payload) {
  const { data } = await axios.put(
    API_ENDPOINT + "/" + todoId + JSON_EXT,
    payload
  );
  console.log("patch", data);
  return data;
}

// delete todos
async function deleteMethodTodoHandler(todoId) {
  const { data } = await axios.delete(API_ENDPOINT + "/" + todoId + JSON_EXT);
  return data;
}

export {
  postTodoHandler,
  getTodoHandler,
  patchTodoHandler,
  deleteMethodTodoHandler
};
