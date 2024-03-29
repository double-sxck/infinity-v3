import styled from "styled-components";

export const Header = styled.header<{ type: string }>`
  position: sticky;
  top: 0px;

  display: flex;
  align-items: start;
  justify-content: space-between;

  padding: 2rem calc(6.8rem - 20px) 2rem 6.8rem; /* 오른쪽 패딩 수정 */

  width: 100vw;

  box-sizing: border-box;
`;

export const InputBox = styled.input`
  width: 70rem;
  height: 4.8rem;

  box-sizing: border-box;

  padding-left: 2.4rem;

  border: 0.1rem solid #9a9a9a;
  border-radius: 2.4rem 0rem 0rem 2.4rem;

  font-size: 2.4rem;
`;

export const SearchStick = styled.div`
  width: 10rem;
  height: 4.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f5f5f5;

  box-sizing: border-box;

  border-radius: 0rem 2.4rem 2.4rem 0rem;
  border: 0.1rem solid #9a9a9a;
  border-left: none;
`;

export const UserProfileBox = styled.div`
  position: relative;

  width: 4.8rem;
  height: 4.8rem;

  border: 0.1rem solid #d9d9d9;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

`;

export const ProfileClickBox = styled.div`
  position: absolute;
  top: 7rem;
  right: 4rem;
  z-index: 10;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;

  width: 18rem;

  box-shadow: 0 0 1rem #00000044;
  border-radius: 0.8rem;
  cursor: pointer;

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

export const ProfileBoxText = styled.p`
  font-size: 1.9rem;
  font-weight: 400;
  color: #2c333e;
`;

export const ProfileLine = styled.div`
  border-top: 0.1rem solid #d9d9d9;
  width: 18rem;
  margin-left: -1.5rem;
`;
