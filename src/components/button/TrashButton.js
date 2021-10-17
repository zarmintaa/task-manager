import { useContext } from "react";
import TaskContext from "../../store/task-context";

const TrashButton = (props) => {
  const ctx = useContext(TaskContext);
  const deleteTask = () => {
    ctx.onDeleteTask(props.id);
  };
  return <button onClick={deleteTask} className="trash-button" />;
};

export default TrashButton;
