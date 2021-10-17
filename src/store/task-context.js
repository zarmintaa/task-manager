import React, { useEffect, useState } from "react";
import { checkBrowserSupportLocalstorage } from "../components/utils/Utils";

const TaskContext = React.createContext({
  tasks: [],
  onUpdateTask: (taskId) => {},
  onUpdateToUnfinishedTask: (taskId) => {},
  onDeleteTask: (taskID) => {},
  onDeleteAllTasks: () => {},
  onAddTask: () => {},
});

export const TaskContextProvider = (props) => {
  const [enteredTask, setEnteredTask] = useState([]);

  useEffect(() => {
    const getData = localStorage.getItem("tasks");
    let data = JSON.parse(getData);
    if (data !== null) {
      setEnteredTask(data);
    }
    checkBrowserSupportLocalstorage();
  }, []);

  const filterTask = (todoId) => {
    return enteredTask.filter((todo) => todo.id !== todoId);
  };

  const removeTasks = (todoId) => {
    return enteredTask.filter((task) => task.id !== todoId);
  };

  const updateTasks = (prevTask, newTask) => {
    let allTask = [];
    prevTask.forEach((tasks) => {
      allTask.push(tasks);
    });
    allTask.push(newTask);
    setEnteredTask(allTask);
    return allTask;
  };

  const addToFinishedTaskHandler = (todoId) => {
    const findTask = enteredTask.filter((todo) => todo.id === todoId);
    findTask[0].isCompleted = true;
    const prevTasks = filterTask(todoId);
    return updateTasks(prevTasks, findTask[0]);
  };

  const updateTaskHandler = (todoId) => {
    const newTasks = addToFinishedTaskHandler(todoId);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setEnteredTask(newTasks);
  };

  const AddToUnfinishedTaskHandler = (todoId) => {
    const findTodo = enteredTask.filter((todo) => todo.id === todoId);
    findTodo[0].isCompleted = false;
    const prevTasks = filterTask(todoId);
    return updateTasks(prevTasks, findTodo[0]);
  };

  const updateToUnfinishedTaskHandler = (todoId) => {
    const newTasks = AddToUnfinishedTaskHandler(todoId);
    setEnteredTask(newTasks);
    localStorage.removeItem("tasks");
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const deleteTaskHandler = (todoId) => {
    const removedTodo = removeTasks(todoId);
    setEnteredTask(removedTodo);
    localStorage.setItem("tasks", JSON.stringify(removedTodo));
  };

  const deleteAllTasksHandler = () => {
    localStorage.clear();
    setEnteredTask([]);
  };

  const addTaskHandler = (task) => {
    setEnteredTask((prevState) => {
      return [task, ...prevState];
    });
    if (enteredTask === []) {
      localStorage.setItem("tasks", JSON.stringify([enteredTask, task]));
    } else {
      localStorage.setItem("tasks", JSON.stringify([...enteredTask, task]));
    }
  };
  return (
    <TaskContext.Provider
      value={{
        tasks: enteredTask,
        onUpdateTask: updateTaskHandler,
        onUpdateToUnfinishedTask: updateToUnfinishedTaskHandler,
        onDeleteTask: deleteTaskHandler,
        onDeleteAllTasks: deleteAllTasksHandler,
        onAddTask: addTaskHandler,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
export default TaskContext;
