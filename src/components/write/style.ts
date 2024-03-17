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
`;
