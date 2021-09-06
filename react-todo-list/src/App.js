import React, { useState } from "react";
import Overlay from "./components/Overlay/Overlay";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import Trash from "./components/Trash/Trash";
import TodoProvider from "./store/TodoProvider";
import "./styles.css";
import "./styles/tailwind-pre-build.css";

export default function App() {
  const [popUp, setPopUp] = useState(false);

  const overLayHandler = () => {
    setPopUp((prev) => !prev);
  };

  return (
    <>
      <TodoProvider>
        {popUp && <Overlay onModal={overLayHandler} />}
        <TodoInput />
        <TodoList />
        {!popUp && <Trash onModal={overLayHandler} />}
      </TodoProvider>
    </>
  );
}
