import styled, { keyframes } from "styled-components";

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

  cursor: pointer;
`;

export const ContentsArea = styled.div`
  width: 100%;

  margin: 4rem auto 16rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8.8rem;
`;

export const SearchContentsArea = styled.div`
  width: 100%;

  margin: 4rem auto 16rem;

  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const NoResult = styled.div`
  font-size: 3rem;
`

export const LoadingNovel = styled.div`
`

const moveGradient = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const LoadingImage = styled.div`
  width: 30rem;
  height: 30rem;

  background: linear-gradient(to right, #f0f0f0, #ddd, #f0f0f0);
  background-size: 200% 100%;
  animation: ${moveGradient} 1.5s infinite linear;

  border-radius: 2.4rem;
  margin-bottom: 1.2rem;
`

export const LoadingTitle = styled(LoadingImage)`
  height: 3rem;

  margin-bottom: 0.4rem;
`

export const LoadingViews = styled(LoadingImage)`
  height: 2.2rem;
`
