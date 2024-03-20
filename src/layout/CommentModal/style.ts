import styled from "styled-components";

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #2c333e70; /* 배경색에 투명도 적용 */
  position: fixed;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: auto;
  min-width: 80rem;
  height: 60rem;
  background-color: white;
  border-radius: 0.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 3;
`;
