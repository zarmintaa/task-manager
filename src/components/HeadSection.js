import styled from "styled-components";

const HeadSection = () => {
  const WrapperHeader = styled.div`
    width: 1024px;
    border-radius: 8px;
    margin: 16px;
    padding: 16px;
    flex-grow: 1;
    height: fit-content;
    background-color: #ffffff;
    box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
      0 15px 40px rgba(166, 173, 201, 0.2);
    @media only screen and (max-width: 1024px) {
      width: 100%;
    }
  `;

  const HeadTitle = styled.h2`
    text-align: center;
  `;

  return (
    <WrapperHeader>
      <HeadTitle>Tambah yang harus dilakukan</HeadTitle>
    </WrapperHeader>
  );
};

export default HeadSection;
