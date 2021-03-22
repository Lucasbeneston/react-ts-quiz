import React, { useContext } from "react";
import GameInformationsContext from "../../contexts/InformationsGameContext";
import styled from "styled-components";
import device from "../../styles/breakpoints";

// Data
import data from "../../mocks/categories.json";

// Components
import SquareButton from "../atoms/SquareButton";

const ListCategories = () => {
  const context = useContext(GameInformationsContext);
  const { gameInformations, setGameInformations } = context;

  return (
    <>
      <Title>... and a gategory</Title>
      <ListContainer>
        {data.map((category) => (
          <SquareButton
            onClick={(e) => {
              setGameInformations({
                ...gameInformations,
                category: e.currentTarget.value,
              });
            }}
            key={category.name}
            title={category.name}
            icon={category.icon}
            value={category.id}
            isSelected={category.id === gameInformations.category}
          />
        ))}
      </ListContainer>
    </>
  );
};

export default ListCategories;

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
  margin-bottom: calc(45px + 10%);

  @media ${device.tablet} {
    margin-bottom: calc(45px + 2.5%);
  }

  @media ${device.tablet} {
    margin-bottom: calc(45px + 2%);
  }

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
