import styled from "styled-components";

export const ListItem = styled.div`
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const Item = styled.div`
  border-radius: 16px;
  margin-top: 16px;
  padding: 12px 24px 12px 24px;
  background: white;
  display: flex;
  align-items: center;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
`;
