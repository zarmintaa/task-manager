import UnfinishedTodo from "./UnfinishedTodo";
import FinishedTodo from "./FinishedTodo";
import { Fragment } from "react";

const Task = (props) => {
  const todoUnfinishedHandler = props.todos.filter(
    (todo) => todo.isCompleted === false
  );

  const todoFinishedHandler = props.todos.filter(
    (todo) => todo.isCompleted === true
  );

  return (
    <Fragment>
      <UnfinishedTodo
        updateTask={props.updateTasks}
        todos={todoUnfinishedHandler}
      />
      <FinishedTodo
        deleteTask={props.deleteTask}
        updateTaskToUnfinished={props.updateTaskToUnfinished}
        todos={todoFinishedHandler}
      />
    </Fragment>
  );
};

export default Task;
