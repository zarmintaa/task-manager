import { Fragment } from "react";

const Header = (props) => {
  const deleteAllTasks = () => {
    props.deleteTodo();
  };
  return (
    <Fragment>
      <header className="nav">
        <h1>Todo List</h1>
        <button onClick={deleteAllTasks} className="delete-all">
          Delete All Tasks
        </button>
      </header>
    </Fragment>
  );
};

export default Header;
