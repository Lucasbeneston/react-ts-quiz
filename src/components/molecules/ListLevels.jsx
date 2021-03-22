import React, { useContext } from "react";
import GameInformationsContext from "../../contexts/InformationsGameContext";
import styled from "styled-components";
import device from "../../styles/breakpoints";

// Data
import data from "../../mocks/levels.json";

// Components
import SquareButton from "../atoms/SquareButton";

const ListLevels = () => {
  const context = useContext(GameInformationsContext);
  const { gameInformations, setGameInformations } = context;

  return (
    <>
      <Title>Choose the difficulty</Title>
      <ListContainer>
        {data.map((level) => (
          <SquareButton
            onClick={(e) => {
              setGameInformations({
                ...gameInformations,
                difficulty: e.currentTarget.value,
              });
            }}
            key={level.difficulty}
            title={level.difficulty}
            icon={level.icon}
            value={level.difficulty.toLowerCase()}
            isSelected={
              level.difficulty.toLocaleLowerCase() ===
              gameInformations.difficulty
            }
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
