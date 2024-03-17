import styled from "styled-components";

export const ContentBox = styled.div`
  width: 48rem;
  height: 66.3rem;

  border: 0.1rem solid #9a9a9a;
  border-radius: 2.4rem;
`;

export const ContentText = styled.p`
  font-size: 3.2rem;
  font-weight: 400;
  color: #2c333e;
  text-align: center;
`;

export const ContentInputBox = styled.input`
  width: 22rem;
  height: 4.4rem;
  border: 0.2rem solid #2c333e;
  border-radius: 2.4rem 2.4rem 2.4rem 0rem;
  padding: 0.5rem;
  font-size: 2.4rem;
  font-weight: 400;

  ::placeholder {
    color: #9a9a9a;
  }
`;

export const RowText = styled.p`
  color: #2c333e;
  font-size: 2.4rem;
  font-weight: 400;

  margin-left: 1.8rem;
  margin-right: 4rem;
`;

export const HelfLine = styled.div`
  border-top: 0.1rem solid #9a9a9a;
  margin: 4rem 0rem;
  width: 100%;
`;

export const AddContentText = styled.p`
  font-size: 2.4rem;
  font-weight: 400;
  color: #2c333e;
  text-align: center;

  margin-left: 2rem;
`;

export const WriteButton = styled.div`
  width: 8rem;
  height: 8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.1rem solid #d9d9d9;
  border-radius: 2.4rem;
`;

export const VeiwNovel = styled.p`
  width: 100%;
  height: 100%;

  box-sizing: border-box;
  padding: 2rem;

  color: #2c333e;
  font-size: 2.4rem;
  font-weight: 400;

  overflow: auto;
`;
