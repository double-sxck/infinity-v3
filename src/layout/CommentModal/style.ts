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
  width: 102.4rem;
  height: 85rem;
  background-color: white;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  padding-top: 10rem;

  color: #2c333e;

  z-index: 3;

  overflow-y: auto;
`;

export const ImageBox = styled.div`
  width: 34rem;
  height: 34rem;

  margin-left: 8.6rem;

  background-color: black;

  border-radius: 2.4rem;
`;

export const NovelTitle = styled.p`
  font-size: 3.6rem;
  font-weight: 700;
`;

export const NovelContent = styled.p`
  width: auto;
  max-width: 86rem;
  font-size: 2.4rem;
  font-weight: 400;

  overflow-wrap: break-word;
`;

export const HelfLine = styled.div`
  width: 100%;
  border-top: 0.1rem solid #9a9a9a;
`;

export const MessageBox = styled.div<{ isMy: boolean }>`
  width: auto;
  max-width: 50rem;
  height: auto;

  padding: 1.6rem 2.4rem;

  border: 0.2rem solid #2c333e;
  border-radius: ${({ isMy }) =>
    isMy ? "2.4rem 2.4rem 2.4rem 0" : "2.4rem 2.4rem 0 2.4rem"};
  align-self: ${({ isMy }) => (isMy ? "flex-start" : "flex-end")};
`;

export const MessageInput = styled.input`
  width: 84rem;
  height: 5.6rem;

  border-radius: 2.4rem 2.4rem 0 2.4rem;
  border: 0.2rem solid #2c333e;

  font-size: 2rem;
  font-weight: 400;

  padding-left: 2.5rem;

  ::placeholder {
    color: #d9d9d9;
  }
`;
