import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import color from "../../styles/variables";

const NoMatchView = () => {
  return (
    <Container>
      <Illustration>😭</Illustration>
      <AlertMessage>Oh no ! Page not found...</AlertMessage>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <LinkContainer>
          <Title>Go to the quiz ! 🔥</Title>
        </LinkContainer>
      </Link>
    </Container>
  );
};

export default NoMatchView;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 130px);
  justify-content: center;
  padding: 10%;
`;

const Illustration = styled.span`
  font-size: 10rem;
`;

const AlertMessage = styled.h2`
  color: ${color.offWhite};
  font-size: 2.4rem;
  margin-bottom: 20px;
`;

const LinkContainer = styled.div`
  align-items: center;
  border: 1px solid ${color.offWhite};
  border-radius: 25px;
  display: flex;
  height: 45px;
  padding: 0 30px;

  &:hover {
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
  }
`;

const Title = styled.p`
  color: ${color.offWhite};
`;
