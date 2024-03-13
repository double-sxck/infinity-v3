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
  width: 80rem;
  height: 60rem;
  background-color: white;
  border-radius: 0.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 3;
`;

export const ModalMainText = styled.p`
  font-size: 4rem;
  font-weight: 700;

  color: #2c333e;

  margin-top: 2rem;
  text-align: center;
`;

export const InputText = styled.input`
  width: 60rem;
  height: 7rem;

  border: 0.1rem solid #9a9a9a;
  border-radius: 2.4rem;

  display: flex;
  align-items: center;

  padding: 1rem;
  font-size: 3rem;

  &::placeholder {
    color: #9a9a9a;
    font-weight: 400;
  }
`;

export const CreateText = styled.p`
  font-weight: 400;
  font-size: 2.4rem;
  color: #2c333e;
`;

export const NextButton = styled.input`
  width: 9rem;
  height: 6rem;
  background-color: #2c333e;

  border-radius: 2.4rem;

  font-size: 2.4rem;
  font-weight: 400;
  color: #ffffff;
`;

export const Row = styled.div`
  width: 90%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
