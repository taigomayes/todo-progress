import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { Form } from "./Components/Form";
import { Display } from "./Components/Display";
import { Progress } from "./Components/Progress";

const Clear = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  background: white;
  width: 100px;
  color: grey;

  height: 25px;
  cursor: pointer;
  box-shadow: 0 0 10px grey;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 10px 0 0;
  z-index: 1000;
`;


function App() {
  const [term, setTerm] = useState("Add Something To Do");

  const [todos, setTodos] = useState([]);

  const [completed, setCompleted] = useState(0);

  const d = new Date();
  const month = d.getUTCMonth() + 1; //months from 1-12
  const day = d.getUTCDate();
  const year = d.getUTCFullYear();
  const newdate = year + "/" + month + "/" + day;

  const onFormSubmit = (e) => {
    e.preventDefault();


    if (todos.length === 0) {

      setTimeout(() => {

        alert('tap todos to complete')

      }, 300)
      
    }

    setTodos((todos) => [
      ...todos,
      {
        id: todos.length,
        todo: term,
        date: newdate,
        complete: false,
      },
    ]);
    setTerm("");
  };

  const clearAll = () => {
    setTodos([]);
    setCompleted(0);
  };

  return (
    <div className="App">
      <Clear onClick={clearAll}>clear all</Clear>



      <Form
        todos={todos}
        onFormSubmit={onFormSubmit}
        term={term}
        setTerm={setTerm}
      />

      <Progress completed={completed} todos={todos} />



      <Display
        setTodos={setTodos}
        completed={completed}
        setCompleted={setCompleted}
        todos={todos}
      />
    </div>
  );
}

export default App;
