import "./App.css";
import { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import Wrapper from "./layout/Wrapper";
import TaskForm from "./components/todo/TaskForm";
import Task from "./components/todo/Task";
import HeadSection from "./components/HeadSection";
import { checkBrowserSupportLocalstorage } from "./components/utils/Utils";

function App(key, value) {
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
    setEnteredTask(newTasks);
  };

  const AddToUnfinishedTaskHandler = (todoId) => {
    const findTodo = enteredTask.filter((todo) => todo.id === todoId);
    findTodo[0].isCompleted = false;
    const prevTasks = filterTask(todoId);
    return updateTasks(prevTasks, findTodo[0]);
  };

  const updateToUnfinishedTask = (todoId) => {
    const newTasks = AddToUnfinishedTaskHandler(todoId);
    setEnteredTask(newTasks);
  };

  const deleteTaskHandler = (todoId) => {
    const removedTodo = removeTasks(todoId);
    setEnteredTask(removedTodo);
    localStorage.setItem("tasks", JSON.stringify(removedTodo));
  };

  const deleteAllTasks = () => {
    localStorage.clear();
    setEnteredTask([]);
  };

  const addTask = (task) => {
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
    <Fragment>
      <Header deleteTodo={deleteAllTasks} />
      <Wrapper>
        <HeadSection />
        <TaskForm addTask={addTask} />
        <Task
          deleteTask={deleteTaskHandler}
          updateTaskToUnfinished={updateToUnfinishedTask}
          updateTasks={updateTaskHandler}
          todos={enteredTask}
        />
      </Wrapper>
    </Fragment>
  );
}

export default App;
