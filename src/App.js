import "./App.css";
import { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import Wrapper from "./layout/Wrapper";
import TaskForm from "./components/todo/TaskForm";
import Task from "./components/todo/Task";
import HeadSection from "./components/HeadSection";
import { checkBrowserSupportLocalstorage } from "./components/utils/Utils";

function App(key, value) {
  const [task, setTask] = useState([]);

  useEffect(() => {
    const getData = localStorage.getItem("tasks");
    let data = JSON.parse(getData);
    if (data !== null) {
      setTask(data);
    }
    checkBrowserSupportLocalstorage();
  }, []);

  const filterTask = (todoId) => {
    return task.filter((todo) => todo.id !== todoId);
  };

  const removeTasks = (todoId) => {
    return task.filter((task) => task.id !== todoId);
  };

  const updateTasks = (prevTask, newTask) => {
    let allTask = [];
    prevTask.forEach((tasks) => {
      allTask.push(tasks);
    });
    allTask.push(newTask);
    setTask(allTask);
    return allTask;
  };

  const addToFinishedTaskHandler = (todoId) => {
    const findTask = task.filter((todo) => todo.id === todoId);
    findTask[0].isCompleted = true;
    const prevTasks = filterTask(todoId);
    return updateTasks(prevTasks, findTask[0]);
  };

  const updateTaskHandler = (todoId) => {
    const newTasks = addToFinishedTaskHandler(todoId);
    setTask(newTasks);
  };

  const AddToUnfinishedTaskHandler = (todoId) => {
    const findTodo = task.filter((todo) => todo.id === todoId);
    findTodo[0].isCompleted = false;
    const prevTasks = filterTask(todoId);
    return updateTasks(prevTasks, findTodo[0]);
  };

  const updateToUnfinishedTask = (todoId) => {
    const newTasks = AddToUnfinishedTaskHandler(todoId);
    setTask(newTasks);
  };

  const deleteTaskHandler = (todoId) => {
    const removedTodo = removeTasks(todoId);
    setTask(removedTodo);
  };

  const deleteAllTasks = () => {
    localStorage.clear();
    setTask([]);
  };

  const addTask = (task) => {
    setTask((prevState) => {
      return [task, ...prevState];
    });
    localStorage.setItem("tasks", JSON.stringify([...task, task]));
  };

  return (
    <Fragment>
      <Header deleteTodo={deleteAllTasks} />
      <Wrapper>
        <HeadSection />
        <TaskForm addTask={addTask} />
        <Task
          deleteTask={deleteTaskHandler}
          updateTaskToUnfinished={updateToUnfinishedTask}
          updateTasks={updateTaskHandler}
          todos={task}
        />
      </Wrapper>
    </Fragment>
  );
}

export default App;
