import React from "react";
import styled from "styled-components";

// Data
import data from "../../mocks/categories.json";

// Components
import CategoryButton from "../atoms/CategoryButton";

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const ListCategories: React.FC<Props> = ({ onClick }) => {
  return (
    <ListContainer>
      {data.map((category: any) => (
        <CategoryButton
          onClick={onClick}
          key={category.name}
          category={category.name}
          icon={category.icon}
          categoryId={category.id}
        />
      ))}
    </ListContainer>
  );
};

export default ListCategories;

const ListContainer = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  padding-bottom: calc(5% + 50px);

  & > div {
    margin: 1.66%;
  }
`;
