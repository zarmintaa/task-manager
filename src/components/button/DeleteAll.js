import { useContext } from "react";
import TaskContext from "../../store/task-context";
import styled from "styled-components";

const DeleteAll = (props) => {
  const ctx = useContext(TaskContext);
  const deleteAllTaskHandler = () => {
    ctx.onDeleteAllTasks();
  };

  const ButtonDeleteAll = styled.button`
    font-family: Raleway, sans-serif;
    border-radius: 16px;
    padding: 1rem 2rem;
    color: #ffffff;
    font-size: 1.2rem;
    cursor: pointer;
    border: none;
    background-color: #fd3a3a;

    &:hover {
      filter: drop-shadow(0 15px 15px rgba(0, 0, 0, 0.2));
    }

    &:active {
      transform: scale(1.1);
    }
  `;

  return (
    <ButtonDeleteAll onClick={deleteAllTaskHandler}>
      <span> {props.children}</span>
    </ButtonDeleteAll>
  );
};

export default DeleteAll;
