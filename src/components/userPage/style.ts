import styled from "styled-components";

export const UserPageBox = styled.div`
  width: auto;
  height: auto;

  box-sizing: border-box;
  padding: 6rem 16rem;
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
  position: relative;
`;

export const HerfChildLine = styled.div`
  width: 100%;

  border-top: 1px solid #9a9a9a;

  position: absolute;
  top: 100%;
`;

export const HerfLine = styled.div`
  width: 100%;

  border-top: 1px solid #9a9a9a;
`;

export const InfoItem = styled.p<{ type: boolean }>`
  width: auto + 1rem;
  border-bottom: ${(props) => (props.type ? "0.2rem solid black" : "none")};

  font-weight: 400;
  font-size: 2.4rem;
`;
