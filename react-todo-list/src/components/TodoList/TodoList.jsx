import { useContext } from "react";
import TodoContext from "../../store/todo-context";
import Card from "../UI/Card";
import TodoRow from "./TodoRow";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <Card className="mt-10 bg-purple-200 shadow-xl px-10 py-5">
      {todos
        .slice(0)
        .reverse()
        .filter((row) => row.complete === false)
        .map((row) => (
          <TodoRow
            key={row.id}
            id={row.id}
            title={row.title}
            description={row.description}
          />
        ))}
      {todos.filter((row) => row.complete === false).length === 0 && (
        <p className="text-center my-3 text-purple-500">List is empty</p>
      )}
    </Card>
  );
};

export default TodoList;
