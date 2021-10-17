import { Fragment } from "react";
import DeleteAll from "./button/DeleteAll";

const Header = () => {
  return (
    <Fragment>
      <header className="nav">
        <h1>Todo List</h1>
        <DeleteAll>Delete All</DeleteAll>
      </header>
    </Fragment>
  );
};

export default Header;
