import { useContext } from "react";
import TaskContext from "../../store/task-context";

const CheckButton = (props) => {
  const ctx = useContext(TaskContext);
  const updateTask = () => {
    ctx.onUpdateTask(props.id);
  };
  return <button onClick={updateTask} className="check-button" />;
};

export default CheckButton;
