import "./App.css";
import { Fragment } from "react";
import Header from "./components/Header";
import Wrapper from "./layout/Wrapper";
import TaskForm from "./components/todo/TaskForm";
import Task from "./components/todo/Task";
import HeadSection from "./components/HeadSection";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Wrapper>
        <HeadSection />
        <TaskForm />
        <Task />
      </Wrapper>
    </Fragment>
  );
};

export default App;
