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
  color: ${color.offWhite};
  font-weight: 600;
  height: 45px;
  letter-spacing: 1px;
  outline: none;
  padding: 12px;
  text-transform: uppercase;
  width: 45px;
`;
