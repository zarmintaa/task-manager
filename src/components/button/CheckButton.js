import { useContext } from "react";
import TaskContext from "../../store/task-context";
import styled from "styled-components";
import checkOutline from "../../../src/assets/check-outline.svg";
import checkSolid from "../../../src/assets/check-solid.svg";

const CheckButton = (props) => {
  const ctx = useContext(TaskContext);
  const updateTask = () => {
    ctx.onUpdateTask(props.id);
  };

  const ButtonCheck = styled.button`
    background: url(${checkOutline});
    background-size: contain;
    width: 40px;
    height: 40px;
    margin-left: auto;
    cursor: pointer;
    border: none;

    &:hover {
      background: url(${checkSolid});
      background-size: contain;
    }

    &:focus {
      outline: none;
    }
  `;
  return <ButtonCheck onClick={updateTask} />;
};

export default CheckButton;
