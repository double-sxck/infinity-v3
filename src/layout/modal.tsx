import React, { useRef } from "react";
import styled from "styled-components";
import { useLoginModal } from "../hooks/useLoginMdal";
import { useOutSideClick } from "../hooks/useOutsideClick";
import LoginModalPage from "./login";

const LoginModal = () => {
  const { closeModal } = useLoginModal();
  const ref = useRef<HTMLDivElement>(null); // HTMLDivElement에 대한 Ref 생성
  useOutSideClick(ref, closeModal);
  // event.stopPropagation();

  return (
    <Page>
      <Modal ref={ref}>
        <LoginModalPage />
      </Modal>
    </Page>
  );
};

export default LoginModal;

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #2c333e70; /* 배경색에 투명도 적용 */
  position: fixed;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  width: 80rem;
  height: 60rem;
  background-color: white;
  border-radius: 0.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 3;
`;
