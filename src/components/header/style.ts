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
  width: 80rem;
  height: 4.8rem;

  box-sizing: border-box;

  padding-left: 2.4rem;

  border: 1px solid #9a9a9a;
  border-radius: 2.4rem 0rem 0rem 2.4rem;

  ::placeholder {
    color: #9a9a9a;
    font-weight: 400;
    font-size: 2.4rem;
  }
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
  border: 1px solid #9a9a9a;
  border-left: none;
`;

export const UserProfileBox = styled.div`
  width: 4.8rem;
  height: 4.8rem;

  border: 1px solid #9a9a9a;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
