import { createContext } from "react";

const TodoContext = createContext({
  todos: [],
  onAdd: () => {},
  onDone: () => {},
  onUnDone: () => {},
  onDelete: () => {},
  onEdit: () => {},
  onUpdate: () => {},
  isEdit: {}
});

export default TodoContext;
