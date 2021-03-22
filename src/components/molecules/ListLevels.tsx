import React from "react";
import data from "../../mocks/levels.json";
import styled from "styled-components";
import device from "../../styles/breakpoints";

// Components
import SquareButton from "../atoms/SquareButton";

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const ListLevels: React.FC<Props> = ({ onClick }) => {
  return (
    <>
      <Title>Choose the difficulty</Title>
      <ListContainer>
        {data.map((level: any, index: number) => (
          <SquareButton
            onClick={onClick}
            key={level.difficulty}
            title={level.difficulty}
            icon={level.icon}
            value={level.difficulty.toLowerCase()}
            isSelected={index === 0}
          />
        ))}
      </ListContainer>
    </>
  );
};

export default ListLevels;

const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  padding-bottom: 10px;
  text-align: center;

  @media ${device.tablet} {
    text-align: left;
    margin-left: 2.5%;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;

  & > div {
    margin: 1.66%;

    @media ${device.tablet} {
      margin: 1.66% 2.5%;
    }

    @media ${device.desktop} {
      margin: 1.66% 2%;
    }
  }
`;
