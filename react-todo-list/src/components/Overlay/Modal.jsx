import { useContext } from "react";
import TodoContext from "../../store/todo-context";
import Button from "../UI/Button";
import Card from "../UI/Card";
import DoneList from "./DoneList";

const Modal = (props) => {
  const { todos } = useContext(TodoContext);
  return (
    <>
      <div
        className="fixed z-20 "
        style={{ top: "50%", right: "50%", transform: "translate(50%,-50%)" }}
      >
        <Card className="bg-white">
          <h1 className="font-bold text-2xl text-red-500  text-center">
            Compeleted
          </h1>
          <hr className="border-b-2 w-56 mt-5" />
          <Card
            style={{ maxHeight: "25rem", minHeight: "5rem" }}
            className="overflow-y-auto bg-purple-200"
          >
            {todos
              .slice(0)
              .reverse()
              .filter((row) => row.complete === true)
              .map((row) => (
                <DoneList
                  key={row.id}
                  id={row.id}
                  title={row.title}
                  description={row.description}
                />
              ))}
            {todos.filter((row) => row.complete === true).length === 0 && (
              <p className="text-center mt-5 text-purple-500">List is empty</p>
            )}
          </Card>
          <div className="text-right">
            <Button
              onClick={props.onConfirm}
              label="close"
              className="text-purple-400 border mt-3 "
            />
          </div>
        </Card>
      </div>
    </>
  );
};

export default Modal;
