import { createContext } from "react";

const HTTPTodoContext = createContext({
  todos: [],
  onAdd: () => {},
  onDone: () => {},
  onUnDone: () => {},
  onDelete: () => {},
  onEdit: () => {},
  onUpdate: () => {},
  isEdit: {}
});

export default HTTPTodoContext;
