import React from "react";
import styled from "styled-components";
import color from "../../styles/variables";

type Props = {
  icon: string;
  category: string;
};

const CategoryButton: React.FC<Props> = ({ icon, category }) => {
  return (
    <Container>
      <Content>
        <Icon>{icon}</Icon>
        <Category>{category}</Category>
      </Content>
    </Container>
  );
};

export default CategoryButton;

const Container = styled.div`
  background-color: ${color.softGrey};
  border-radius: 10px;
  position: relative;
  min-width: 30%;
  max-width: 30%;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 10px;
  position: absolute;
  width: 100%;
`;

const Icon = styled.span`
  font-size: 1.8rem;
`;

const Category = styled.h3`
  font-size: 1.4rem;
  text-align: center;
`;