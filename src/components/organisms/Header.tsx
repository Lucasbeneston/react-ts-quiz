import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <header>
      <Title>React typescript quiz</Title>
    </header>
  );
};

export default Header;

// Styles
const Title = styled.h1`
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  height: 50px;
  width: 100%;
`;
