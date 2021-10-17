import { Fragment } from "react";
import DeleteAll from "./button/DeleteAll";
import styled from "styled-components";

const Header = () => {
  const Top = styled.header`
    background: #5f30e2;
    padding: 16px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  return (
    <Top>
      <h1>Todo List</h1>
      <DeleteAll>Delete All</DeleteAll>
    </Top>
  );
};

export default Header;
