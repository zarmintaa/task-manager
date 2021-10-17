import styled from "styled-components";

const Wrapper = (props) => {
  const WrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 1024px) {
      margin: auto;
      width: 100%;
    }
  `;
  return <WrapperDiv className="wrapper">{props.children}</WrapperDiv>;
};

export default Wrapper;
