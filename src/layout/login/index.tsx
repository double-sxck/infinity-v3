import React, { useRef } from "react";
import * as S from "./style";
import { useOutSideClick } from "../../hooks/useOutsideClick";
import { useRecoilState } from "recoil";
import { loginModalStateAtom } from "../../store/modal/loginModalState";
import { useLoginModal } from "../../hooks/useLoginMdal";
import { LogoTextIcon } from "../../assets";
import { Column } from "../../styles/ui";

const LoginModal = () => {
  const { closeModal } = useLoginModal();
  const ref = useRef<HTMLDivElement>(null); // HTMLDivElement에 대한 Ref 생성
  useOutSideClick(ref, closeModal);
  return (
    <S.Page>
      <S.Modal ref={ref}>
        <Column gap={8} justifyContent="center" alignItems="center">
          <div>
            <LogoTextIcon color="#000000" width={240} height={66.45} />
            <S.ModalMainText>로그인</S.ModalMainText>
          </div>
          <S.InputText type="text" placeholder="아이디" />
          <S.Row>
            <S.CreateText>계정 만들기</S.CreateText>
            <S.NextButton type="button" value={"다음"} />
          </S.Row>
        </Column>
      </S.Modal>
    </S.Page>
  );
};

export default LoginModal;
