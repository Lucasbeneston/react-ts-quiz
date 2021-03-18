import React from "react";
import data from "../../mocks/levels.json";
import styled from "styled-components";

// Components
import SquareButton from "../atoms/SquareButton";

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const ListLevels: React.FC<Props> = ({ onClick }) => {
  return (
    <>
      <Title>Choose your level</Title>
      <ListContainer>
        {data.map((level: any, index: number) => (
          <SquareButton
            onClick={onClick}
            key={level.name}
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
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;

  & > div {
    margin: 1.66%;
  }
`;
