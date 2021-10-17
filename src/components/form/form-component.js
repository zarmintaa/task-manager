import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  padding: 16px;
  flex-direction: column;
  min-width: 70%;
  border-radius: 16px;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  padding-bottom: 0.5rem;
  padding-top: 1rem;
  margin-bottom: 0.8rem;
  font-size: 1.5rem;
  font-weight: 500;
  width: fit-content;
`;

export const Input = styled.input`
   {
    font-family: Raleway, sans-serif;
    background: #f5f1ff;
    border: 2px solid #9475ea;
    border-radius: 8px;
    padding: 16px;
    box-sizing: border-box;
    margin-bottom: 8px;
    font-size: 24px;
  }
`;

export const InputSubmit = styled.input`
  width: fit-content;
  font-family: Raleway, sans-serif;
  border-radius: 16px;
  padding: 12px 24px;
  border: 2px solid #5f30e2;
  color: black;
  font-size: 24px;
  margin-top: auto;
  align-self: flex-end;
  cursor: pointer;
  &:focus {
    outline: none;
  }

  &:hover {
    background: #5f30e2;
    color: white;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
`;
