import React from "react";
import styled from "styled-components";
import color from "../../styles/variables";
import device from "../../styles/breakpoints";

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isSelected: boolean;
  icon: string;
  title: string;
  value: string;
};

type ButtonProps = {
  active: boolean;
};

const CategoryButton: React.FC<Props> = ({
  onClick,
  isSelected,
  icon,
  title,
  value,
}) => {
  return (
    <Container>
      <Content active={isSelected} onClick={onClick} value={value}>
        <Icon>{icon}</Icon>
        <Category>{title}</Category>
      </Content>
    </Container>
  );
};

export default CategoryButton;

const Container = styled.div`
  position: relative;
  min-width: 30%;
  max-width: 30%;

  @media ${device.tablet} {
    min-width: 20%;
    max-width: 20%;
  }

  @media ${device.tablet} {
    min-width: 15%;
    max-width: 15%;
  }

  @media ${device.desktop} {
    min-width: 12.5%;
    max-width: 12.5%;
  }

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const Content = styled.button<ButtonProps>`
  align-items: center;
  background-color: ${({ active }) =>
    active ? color.softGrey : color.extraLightGrey};
  border: none;
  border-radius: 10px;
  cursor: pointer;
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
