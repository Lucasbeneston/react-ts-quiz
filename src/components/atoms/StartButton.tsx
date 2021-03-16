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
  bottom: 20px;
  color: ${color.offWhite};
  font-weight: 600;
  height: 45px;
  letter-spacing: 1px;
  outline: none;
  position: absolute;
  right: 12.5%;
  text-transform: uppercase;
  width: 75%;
`;
