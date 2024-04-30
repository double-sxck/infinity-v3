import styled from "styled-components";

export const Title = styled.div`
  width: calc(100% - 24rem);
  margin: 4rem 0;

  font-size: 4.8rem;
  font-weight: 700;
  text-align: center;
`

export const ContentBox = styled.div`
  width: 48rem;
  height: 66.3rem;

  border: 0.1rem solid #9a9a9a;
  border-radius: 2.4rem;
`;

export const Rollback = styled.p`
  width: 14rem;
  font-size: 1.2rem;
  height: fit-content;
  margin: auto 0rem 1rem;
  color: #9a9a9a;
  cursor: pointer;
`

export const ContentText = styled.p`
  font-size: 3.2rem;
  font-weight: 400;
  color: #2c333e;
  text-align: center;
  line-height: 4rem;
`;

export const ContentInputBox = styled.input`
  width: 27rem;
  height: 4.2rem;
  border: 0.2rem solid #2c333e;
  border-radius: 2.4rem 2.4rem 2.4rem 0rem;
  padding: 0.5rem 2rem;
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

  cursor: default;
`;

export const HelfLine = styled.div`
  border-top: 0.1rem solid #9a9a9a;
  margin: 1rem 0rem;
  width: 100%;
`;

export const AddContentText = styled.p`
  width: 30rem;
  text-align: left;
  line-height: 2.4rem;

  font-size: 2.4rem;
  font-weight: 400;
  color: #2c333e;

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

  cursor: pointer;
`;

export const VeiwNovel = styled.div`
  width: 100%;
  height: 100%;

  padding: 2rem;

  color: #2c333e;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 3.2rem;
  letter-spacing: 0.1rem;

  /* overflow: auto;
  white-space: pre-wrap; */
`;

export const KeywordBox = styled.div`
  height: 30rem;

  display: flex;
  flex-direction: column;

  gap: 2.5rem;

  overflow: auto;
`

export const Desc = styled.div`
  font-size: 2.4rem;
  cursor: default;
  color: #9a9a9a;
`

export const Delete = styled.div`
  cursor: pointer;
`

export const NovelReWriteInput = styled.textarea`
  width: 100%;
  height: 100%;

  border: none;
  resize: none;
  
  overflow: auto;
  white-space: pre-wrap; /* 줄 바꿈 활성화 */

  &:disabled {
    background-color: white;
  }
`;