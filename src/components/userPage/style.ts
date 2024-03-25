import styled from "styled-components";

export const UserPageBox = styled.div`
  width: auto;
  height: auto;

  box-sizing: border-box;
  padding: 4rem 8rem 5rem;
`;

export const NickNameText = styled.p`
  font-weight: 700;
  font-size: 4rem;
  color: #2c333e;
`;

export const UserProfileText = styled.p`
  font-size: 2.4rem;
  font-weight: 400;
  color: #2c333e;
`;

export const ChooseInfomation = styled.div`
  padding-left: 2rem;
`;

export const HerfChildLine = styled.div`
  width: calc(100% + 2rem);

  border-top: 1px solid #9a9a9a;

  margin-left: -2rem;
  top: 100%;
`;

export const InfoItem = styled.p<{ type: string }>`
  border-bottom: ${(props) => (props.type === 'true' ? "0.2rem solid black" : "none")};

  padding: 1rem 0.5rem;

  font-weight: 400;
  font-size: 2.4rem;

  cursor: pointer;
`;

export const Under = styled.div`
  margin-bottom: 20rem;
`

export const NoResult = styled.div`
  font-size: 2.6rem;
  margin-top: 8rem;
`

export const WriteButton = styled.div`
  display: flex;
  font-size: 2.4rem;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 1.4rem 2.2rem;
  border: 1px solid #2c333e;
  border-radius: 2rem;
  gap: 2rem;
  cursor: pointer;
  color: black; 
`