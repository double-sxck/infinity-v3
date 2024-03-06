import styled from "styled-components";

export const SidebarBox = styled.div`
  width: 24rem;
  height: calc(100vh - 8rem);

  box-sizing: border-box;
  padding: 2.4rem;

  position: fixed;
  top: 8rem;
`;

export const SidebarText = styled.p`
  font-size: 2rem;
  font-weight: 400;
`;

export const SidebarContour = styled.div`
  width: 100%;
  border-top: 1px solid #9a9a9a;
`;

export const SidebarVerticalLine = styled.div`
  height: 6.6rem;
  border-left: 0.1rem solid black;
`;

export const Between = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
