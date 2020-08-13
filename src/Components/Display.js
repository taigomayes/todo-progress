import React, { useState } from "react";
import styled from "styled-components";

const Todo = styled.div`
  display: flex;
  width: 80vw;
  height: 50px;
  background: white;
  align-items: center;
  justify-content: center;

  margin: 10px;
  transition: ease 0.5s;
  cursor: pointer;

  border-radius: 10px;
  box-shadow: 10px 10px 30px #666666, -10px -10px 30px #ffffff;

  &:hover {
  }
`;

const Delete = styled.button`
  position: absolute;
  right: 15%;
  background: transparent;
  border: none;
  color: grey;
  cursor: pointer;
  font-size: 20px;
  z-index: 500;
  width: 50px;
  height: 50px;

  &:focus {
    outline: none;
  }
`;

const Date = styled.div`
  position: absolute;
  left: 15%;
  color: grey;
  font-size: 10px;
`;

const TodoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  z-index: 1000;
`;

export const Display = ({ todos, setCompleted, completed, setTodos }) => {
  return (
    <div>
      {todos.map((item) => {
        const deleteTodo = (e) => {
          let name = parseInt(e.target.id);

          setTodos(todos.filter((item) => item.id !== name));

          todos.find((x) => x.id === item.id).complete
            ? setCompleted(completed - 1)
            : setCompleted(completed);
        };

        const toggleComplete = () => {
          item.complete = !item.complete;

          item.complete
            ? setCompleted(completed + 1)
            : setCompleted(completed - 1);
        };
        return (
          <TodoContainer>
            <Todo
              style={{
                border: item.complete ? "5px solid #A6E1FA" : "5px solid white",
              }}
              id={item.id}
              onClick={toggleComplete}
            >
              <Date>{item.date}</Date>
              <p>{item.todo}</p>
            </Todo>

            <Delete id={item.id} onClick={deleteTodo}>
              {" "}
              x{" "}
            </Delete>
          </TodoContainer>
        );
      })}
    </div>
  );
};
