import { useContext } from "react";
import TaskContext from "../../store/task-context";

const DeleteAll = (props) => {
  const ctx = useContext(TaskContext);
  const deleteAllTaskHandler = () => {
    ctx.onDeleteAllTasks();
  };
  return (
    <button onClick={deleteAllTaskHandler} className="delete-all">
      <span> {props.children}</span>
    </button>
  );
};

export default DeleteAll;
