import React from "react";
import styled from "styled-components";
import color from "../../styles/variables";

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
};

const StartButton: React.FC<Props> = ({ onClick, title }) => {
  return <Button onClick={onClick}>{title}</Button>;
};

export default StartButton;

const Button = styled.button`
  background: linear-gradient(
    to right,
    ${color.dodgerBlue},
    ${color.purpleHeart}
  );
  border: none;
  border-radius: 25px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
  color: ${color.offWhite};
  cursor: pointer;
  flex: 1;
  font-weight: 600;
  height: 45px;
  letter-spacing: 1px;
  outline: none;
  text-transform: uppercase;

  &:hover {
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
  }
`;
