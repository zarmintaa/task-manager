import { useContext } from "react";
import TaskContext from "../../store/task-context";
import styled from "styled-components";
import imgUndo from "../../assets/undo-ouline.svg";

const UndoButton = (props) => {
  const ctx = useContext(TaskContext);
  const unfinishedTask = () => {
    ctx.onUpdateToUnfinishedTask(props.id);
  };

  const UndoButton = styled.button`
    background: url(${imgUndo});
    background-size: contain;
    width: 40px;
    height: 40px;
    margin-left: auto;
    cursor: pointer;
    border: none;

    &:hover {
      background: url(${imgUndo});
      background-size: contain;
    }
  `;
  return <UndoButton onClick={unfinishedTask} />;
};

export default UndoButton;
