import styled from "styled-components";

const Container = (props) => {
  const ContainerDiv = styled.div`
    width: 1024px;
    border-radius: 8px;
    margin: 16px;
    background: #f8f9fa;
    padding: 16px;
    flex-grow: 1;
    height: fit-content;
    @media only screen and (max-width: 1024px) {
      width: 100%;
    }
  `;
  return <ContainerDiv>{props.children}</ContainerDiv>;
};

export default Container;
