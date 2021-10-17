import { useContext } from "react";
import TaskContext from "../../store/task-context";

const UndoButton = (props) => {
  const ctx = useContext(TaskContext);
  const unfinishedTask = () => {
    ctx.onUpdateToUnfinishedTask(props.id);
  };
  return <button onClick={unfinishedTask} className="undo-button" />;
};

export default UndoButton;
