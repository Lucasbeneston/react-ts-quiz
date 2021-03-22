import React from "react";
import styled, { keyframes } from "styled-components";
import color from "../../styles/variables";

const Loading = () => {
  return (
    <LoadingContainer>
      <Loader />
    </LoadingContainer>
  );
};

export default Loading;

const LoadingContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  animation: ${spin} 1.5s linear infinite;
  border: 5px solid ${color.extraLightGrey};
  border-top: 5px solid ${color.royalBlue};
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;
