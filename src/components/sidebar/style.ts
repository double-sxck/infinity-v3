import styled from "styled-components";

export const SidebarBox = styled.div`
  width: 24rem;
  height: calc(100vh - 9rem);

  box-sizing: border-box;
  padding: 2.4rem;

  position: fixed;
  top: 9rem;
`;

export const SidebarText = styled.p`
  font-size: 2rem;
  font-weight: 400;
  color: #2c333e;
`;

export const SidebarContour = styled.div`
  width: calc(100% + 4.8rem);
  margin-left: -2.4rem;
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

export const Subtitle = styled.p`
  font-size: 2.5rem;
`;

export const LoginButton = styled.div`
  cursor: pointer;

  width: 12.4rem;
  height: 4.8rem;
  border-radius: 2.4rem;
  border: 0.1rem solid #d9d9d9;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
`;

export const LoginText = styled.p`
  color: #2c333e;
  font-size: 2rem;
  font-weight: 400;
`;
