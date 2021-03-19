import React from "react";
import styled from "styled-components";
import color from "../../styles/variables";

// Components
import Coin from "../atoms/SVGR/Coin";

const Header = () => {
  return (
    <HeaderContainer>
      <Title> The Super Quiz </Title>
      <Score>
        0 <Coin />
      </Score>
    </HeaderContainer>
  );
};

export default Header;

// Styles
const HeaderContainer = styled.header`
  height: 80px;
  width: 100%;
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: ${color.offWhite};
  font-weight: 600;
  font-size: 2rem;
`;

const Score = styled.h2`
  align-items: center;
  color: ${color.offWhite};
  display: flex;
  font-weight: 600;
  font-size: 1.8rem;

  & svg {
    height: 3rem;
    margin-left: 5px;
  }
`;
