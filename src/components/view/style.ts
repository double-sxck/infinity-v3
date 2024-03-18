import styled from "styled-components";

export const PageTitle = styled.p`
  font-size: 4.8rem;
  font-weight: 700;
  text-align: center;

  margin-bottom: 4rem;
`;

export const ContentsBox = styled.div`
  width: 120rem;
  height: 70rem;

  border: 0.1px solid #9a9a9a;
  border-radius: 2.4rem;

  display: flex;
  align-items: center;
  margin: 0 auto;

  padding-left: 4rem;
  padding-top: 4rem;
  /* padding-right: 4rem; */
  box-sizing: border-box;
`;

export const ImageBox = styled.div`
  width: 52rem;
  height: 52rem;
  border-radius: 2.4rem;
  background-color: black;
`;

export const ContentTextComponents = styled.p`
  font-size: 2.4rem;
  font-weight: 400;
  color: #2c333e;
`;

export const BrashButton = styled.div`
  width: 4.4rem;
  height: 4.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.1rem solid #d9d9d9;
  border-radius: 2.4rem;
`;

export const InputBox = styled.input`
  border: 0.2rem solid #2c333e;
  border-radius: 2.4rem 2.4rem 2.4rem 0rem;

  font-size: 2.4rem;
  font-weight: 400;
  ::placeholder {
    color: #9a9a9a;
  }
`;

export const RowLine = styled.div`
  width: 100%;
  border-top: 0.1rem solid #9a9a9a;

  margin-top: 4rem;
`;

export const ColumnLine = styled.div`
  height: 100%;
  border-left: 0.1rem solid #9a9a9a;

  margin-left: 4rem;
`;

export const TitleColumn = styled.p`
  color: #2c333e;
  font-size: 3.2rem;
  font-weight: 400;

  text-align: center;
`;

export const TitleInput = styled.input`
  border: 0.2rem solid #2c333e;
  border-radius: 2.4rem 0rem 2.4rem 2.4rem;

  width: 40rem;
  height: 5rem;
  font-size: 2.4rem;

  padding: 1.4rem;
  font-weight: 400;
  margin-top: 4rem;
  ::placeholder {
    color: #9a9a9a;
  }
`;
