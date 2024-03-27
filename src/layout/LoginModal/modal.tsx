import { useRef, useState } from "react";
import styled from "styled-components";
import { useLoginModal } from "../../hooks/useLoginMdal";
import { useOutSideClick } from "../../hooks/useOutsideClick";
import LoginModalPage from "./login";
import JoinInfinity from "./join";

const LoginModal = () => {
  const { closeModal } = useLoginModal();
  const ref = useRef<HTMLDivElement>(null); // HTMLDivElement에 대한 Ref 생성
  useOutSideClick(ref, closeModal);

  const [join, useJoin] = useState<boolean>(false);
  const [idpw, setIdpw] = useState<{
    id: string;
    pw: string;
    nickName: string;
  }>({
    id: "",
    pw: "",
    nickName: "",
  });

  return (
    <Page>
      <Modal ref={ref}>
        {join ? (
          <JoinInfinity setState={useJoin} inputState={setIdpw} value={idpw} />
        ) : (
          <LoginModalPage
            setState={useJoin}
            inputState={setIdpw}
            value={idpw}
          />
        )}
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
  padding: 5rem 0;
  background-color: white;
  border-radius: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 3;
`;
