import React, { useRef, useContext, useState, useEffect } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Input from "../UI/Input";
import TextArea from "../UI/TextArea";

import HTTPTodoContext from "../../store/http-store/http-todo-context";

const TodoInput = () => {
  const [error, setError] = useState({ input: false, textarea: false });
  const inputRef = useRef();
  const textAreaRef = useRef();

  const { onAdd, isEdit, onEdit, onUpdate, todos } = useContext(
    HTTPTodoContext
  );

  const formHandler = (key, value) => {
    if (!value.trim()) {
      setError((prev) => {
        return { ...prev, [key]: true };
      });
      return false;
    } else {
      setError((prev) => {
        return { ...prev, [key]: false };
      });
      return true;
    }
  };

  const inputHandler = () => {
    const title = inputRef.current.getValue();
    const isInputValid = formHandler("input", title);

    return isInputValid && title;
  };

  const textAreaHandler = () => {
    const description = textAreaRef.current.getValue();
    const isTextAreaValid = formHandler("textarea", description);

    return isTextAreaValid && description;
  };

  useEffect(() => {
    const setInputHandler = () => {
      const [data] = todos.filter((todo) => todo.id === isEdit.id);
      inputRef.current.setValue(data.title);
      textAreaRef.current.setValue(data.description);
    };

    if (isEdit.status) {
      setInputHandler();
    }
  }, [isEdit, todos]);

  const clearHandler = () => {
    inputRef.current.clearValue();
    textAreaRef.current.clearValue();
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const title = inputHandler();
    const description = textAreaHandler();

    if (title && description) {
      if (isEdit.status) {
        const todo = {
          id: isEdit.id,
          title,
          description,
          complete: false
        };

        onUpdate(todo);
      } else {
        const todo = {
          /* id: Math.random(), */
          title,
          description,
          complete: false
        };

        onAdd(todo);
      }

      clearHandler();
    } else {
      console.log("invalid...");
    }
  };

  const errorShowHandler = (arg) => {
    return <p className="text-red-400">Please enter {arg}</p>;
  };

  return (
    <Card className="px-10 pb-5 bg-purple-200 shadow-xl">
      <h2 className="font-bold text-2xl my-4 text-purple-500 flex justify-center">
        TODO
      </h2>
      <form autoComplete="off" onSubmit={submitHandler}>
        <Input
          ref={inputRef}
          onChange={inputHandler}
          className="w-full h-9  my-2 rounded p-1"
          name="title"
          placeholder="Enter your title..."
        />
        {error.input && errorShowHandler("title")}
        <TextArea
          ref={textAreaRef}
          onChange={textAreaHandler}
          className="w-full   mt-2 rounded p-1"
          name="description"
          placeholder="Enter your description..."
        />
        {error.textarea && errorShowHandler("description")}
        <div className="flex justify-end ">
          <Button
            type="submit"
            className="bg-purple-400 "
            label={isEdit.status ? "Update" : "Add"}
          />
          <Button
            onClick={clearHandler}
            className="bg-gray-100 text-purple-700"
            label="Clear"
          />
        </div>
      </form>
    </Card>
  );
};

export default TodoInput;
