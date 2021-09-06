import { useContext } from "react";
import TodoContext from "../../store/todo-context";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Row from "../UI/Row";

const TodoRow = (props) => {
  const { onDone, onEdit } = useContext(TodoContext);

  const doneHandler = () => {
    onDone(props.id);
  };
  const editHandler = () => {
    onEdit(props.id);
  };

  return (
    <Card className="bg-white text-purple-500 my-5 shadow-sm">
      <Row title={props.title} description={props.description} />
      <div className="flex justify-end mt-3">
        <Button onClick={doneHandler} className="bg-purple-400" label="Done" />
        <Button onClick={editHandler} className="text-purple-600 bg-purple-200 " label="Edit" />
      </div>
    </Card>
  );
};

export default TodoRow;
