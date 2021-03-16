import React from "react";
import styled from "styled-components";
import color from "../../styles/variables";

const Header = () => {
  return (
    <header>
      <Title>The Super Quiz</Title>
    </header>
  );
};

export default Header;

// Styles
const Title = styled.h1`
  align-items: center;
  color: ${color.offWhite};
  display: flex;
  font-weight: 600;
  justify-content: center;
  font-size: 2rem;
  height: 80px;
  width: 100%;
`;
