import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FormDetails from "./FormDetails";
import TodoList from "./ToDoList";

function App() {
  return (
    <>
      <TodoList />
      <FormDetails />
    </>
  );
}

export default App;
