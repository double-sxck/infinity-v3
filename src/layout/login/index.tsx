import React, { useRef } from "react";
import * as S from "./style";
import { useOutSideClick } from "../../hooks/useOutsideClick";
import { useRecoilState } from "recoil";
import { loginModalStateAtom } from "../../store/modal/loginModalState";
import { useLoginModal } from "../../hooks/useLoginMdal";

const LoginModal = () => {
  const { closeModal } = useLoginModal();
  const ref = useRef<HTMLDivElement>(null); // HTMLDivElement에 대한 Ref 생성
  useOutSideClick(ref, closeModal);
  return (
    <S.Page>
      <S.Modal ref={ref}></S.Modal>
    </S.Page>
  );
};

export default LoginModal;
