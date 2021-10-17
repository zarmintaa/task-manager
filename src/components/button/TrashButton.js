import { useContext } from "react";
import TaskContext from "../../store/task-context";
import styled from "styled-components";
import trashOutline from "../../../src/assets/trash-outline.svg";
import trashFill from "../../../src/assets/trash-fill.svg";

const TrashButton = (props) => {
  const ctx = useContext(TaskContext);
  const deleteTask = () => {
    ctx.onDeleteTask(props.id);
  };

  const ButtonTrash = styled.button`
    background: url(${trashOutline});
    background-size: contain;
    width: 40px;
    height: 40px;
    margin-left: 16px;
    cursor: pointer;
    border: none;

    &:focus {
      outline: none;
    }

    &:hover {
      background: url(${trashFill});
      background-size: contain;
    }
  `;
  return <ButtonTrash onClick={deleteTask} />;
};

export default TrashButton;
