import "./App.css";
import { Fragment } from "react";
import Header from "./components/Header";
import Wrapper from "./layout/Wrapper";
import TaskForm from "./components/todo/TaskForm";
import Task from "./components/todo/Task";
import HeadSection from "./components/HeadSection";
import { createGlobalStyle } from "styled-components";

const App = () => {
  const GlobalStyle = createGlobalStyle`
      @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

      * {
        box-sizing: border-box;
      }

      html,
      body {
        font-family: Raleway, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }`;

  return (
    <Fragment>
      <GlobalStyle />
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
