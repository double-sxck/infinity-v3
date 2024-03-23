import styled from "styled-components";

interface ListBoxProps {
  $selected: boolean;
}

export const ListBox = styled.div<ListBoxProps>`
  width: 10rem;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => (props.$selected ? "#2c333e" : "#f1f1f1")};
  color: ${(props) => (props.$selected ? "white" : "black")};

  border-radius: 0.8rem;

  font-size: 2rem;
  font-weight: 400;

  &:hover {
    background-color: #2c333e;
    color: #ffffff;
  }
`;

export const ContentsArea = styled.div`
  width: 100%;

  margin: 4rem auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8.8rem;
`;

export const SearchContentsArea = styled.div`
  width: 100%;

  margin: 4rem auto;

  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const Category = styled.div`
  font-size: 4rem;
`;
