import React from "react";
import styled from "styled-components";
import color from "../../styles/variables";

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon: string;
  category: string;
  categoryId: string;
};

const CategoryButton: React.FC<Props> = ({
  onClick,
  icon,
  category,
  categoryId,
}) => {
  return (
    <Container>
      <Content onClick={onClick} value={categoryId}>
        <Icon>{icon}</Icon>
        <Category>{category}</Category>
      </Content>
    </Container>
  );
};

export default CategoryButton;

const Container = styled.div`
  position: relative;
  min-width: 30%;
  max-width: 30%;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const Content = styled.button`
  align-items: center;
  background-color: ${color.extraLightGrey};
  border: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  outline: none;
  padding: 10px;
  position: absolute;
  width: 100%;

  &:hover {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  }
`;

const Icon = styled.span`
  font-size: 1.8rem;
`;

const Category = styled.h3`
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;
`;
