import React from "react";
import styled from "styled-components";
import color from "../../styles/variables";

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  content: JSX.Element | string;
};

const RoundedButton: React.FC<Props> = ({ onClick, content }) => {
  return <Button onClick={onClick}>{content}</Button>;
};

export default RoundedButton;

const Button = styled.button`
  background: ${color.dodgerBlue};
  border: none;
  border-radius: 25px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
  color: ${color.offWhite};
  cursor: pointer;
  font-weight: 600;
  height: 45px;
  letter-spacing: 1px;
  outline: none;
  padding: 12px;
  text-transform: uppercase;
  width: 45px;

  &:hover {
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
  }
`;
