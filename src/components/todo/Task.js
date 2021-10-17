import UnfinishedTodo from "./UnfinishedTodo";
import FinishedTodo from "./FinishedTodo";
import { Fragment, useContext } from "react";
import TaskContext from "../../store/task-context";

const Task = (props) => {
  const ctx = useContext(TaskContext);
  const todoUnfinishedHandler = ctx.tasks.filter(
    (todo) => todo.isCompleted === false
  );

  const todoFinishedHandler = ctx.tasks.filter(
    (todo) => todo.isCompleted === true
  );

  return (
    <Fragment>
      <UnfinishedTodo todos={todoUnfinishedHandler} />
      <FinishedTodo
        deleteTask={props.deleteTask}
        updateTaskToUnfinished={props.updateTaskToUnfinished}
        todos={todoFinishedHandler}
      />
    </Fragment>
  );
};

export default Task;
