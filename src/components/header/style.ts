import styled from "styled-components";

export const Header = styled.header`
  position: sticky;
  top: 0px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0rem 6.8rem;
  overflow-x: hidden;

  width: 100vw;
  height: 8rem;

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
  width: 4.8rem;
  height: 4.8rem;

  border: 0.1rem solid #d9d9d9;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
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
