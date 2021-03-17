import React from "react";
import styled from "styled-components";

// Components
import StartButton from "../atoms/StartButton";

type Props = {
  buttonOption?: JSX.Element;
  title: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

type OptionProps = {
  optionIsHere: boolean;
};

const ButtonContainer: React.FC<Props> = ({ buttonOption, onClick, title }) => {
  return (
    <Container optionIsHere={buttonOption !== undefined}>
      {buttonOption}
      <StartButton title={title} onClick={onClick} />
    </Container>
  );
};

export default ButtonContainer;

const Container = styled.div<OptionProps>`
  bottom: 5%;
  display: flex;
  left: 10%;
  position: absolute;
  width: 80%;

  ${({ optionIsHere }) =>
    optionIsHere && "& > * { &:first-child {margin-right: 10px;}}"};
`;
