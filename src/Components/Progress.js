import React from "react";
import styled from "styled-components";

const Progressbar = styled.div`
  width: 80vw;
  height: 10px;
  background: white;
  position: absoulte;
  top: 10%;
  left: 10%;
  border-radius: 10px;
  border: 5px solid white;
  z-index: 100;
  transition: ease 0.5s;
  box-shadow: 10px 10px 30px #666666, -10px -10px 30px #ffffff;

`;
const Progression = styled.div`
  width: 10vw;
  height: 10px;
  background: green;
  position: absoulte;
  top: 10%;
  left: 10%;
  border-radius: 5px;
  transition: ease 0.5s;

  z-index: 100;
`;

export const Progress = ({ todos, completed }) => {
  const progress = () => {
    if (completed === 0) {
      return 0;
    } else {
      return completed * (80 / todos.length);
    }
  };

  const finished = () => {
    if (progress() === 80) {
      return "5px solid #39ff14";
    }
  };

  return (
    <Progressbar style={{ border: finished() }}>
      <Progression style={{ width: progress() + "vw" }} />
    </Progressbar>
  );
};
