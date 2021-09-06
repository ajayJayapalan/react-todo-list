import { useContext } from "react";
import HTTPTodoContext from "../../store/http-store/http-todo-context";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Row from "../UI/Row";

const DoneList = (props) => {
  const { onUnDone, onDelete } = useContext(HTTPTodoContext);

  const unDoneHandler = () => {
    onUnDone(props.id);
  };

  const deleteHandler = () => {
    onDelete(props.id);
  };

  return (
    <Card className="bg-white text-purple-500 my-5 shadow-sm">
      <Row title={props.title} description={props.description} />
      <div className="flex justify-end mt-3">
        <Button
          onClick={unDoneHandler}
          className="bg-purple-400"
          label="Not done"
        />
        <Button onClick={deleteHandler} className="bg-red-400" label="Delete" />
      </div>
    </Card>
  );
};

export default DoneList;
