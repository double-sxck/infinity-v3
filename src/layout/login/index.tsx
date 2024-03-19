import React, { useRef, useState } from "react";
import * as S from "./style";
import { useOutSideClick } from "../../hooks/useOutsideClick";
import { useLoginModal } from "../../hooks/useLoginMdal";
import { Column } from "../../styles/ui";
import { LogoTextIcon } from "../../assets";

interface ChildProps {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  inputState: React.Dispatch<
    React.SetStateAction<{ id: string; pw: string; nickName: string }>
  >;
}

const LoginModalPage: React.FC<ChildProps> = ({ setState }) => {
  const { closeModal } = useLoginModal();
  const ref = useRef<HTMLDivElement>(null); // HTMLDivElement에 대한 Ref 생성
  useOutSideClick(ref, closeModal);
  const [showPW, setShowPW] = useState<boolean>(false);

  return (
    <Column gap={8} justifyContent="center" alignItems="center">
      <div>
        <LogoTextIcon color="#000000" width={240} height={66.45} />
        <S.ModalMainText>로그인</S.ModalMainText>
      </div>
      <Column gap={3}>
        <S.InputText type="text" placeholder="아이디" />
        <S.InputText
          type={showPW ? "text" : "password"}
          placeholder="비밀번호"
        />
        <S.Row>
          <div>
            <S.ShowPW htmlFor="pwCheckBox">비밀번호 표시</S.ShowPW>
            <input
              type="checkbox"
              id="pwCheckBox"
              checked={showPW}
              onChange={() => setShowPW(!showPW)}
            />
          </div>
          <div></div>
        </S.Row>
      </Column>

      <S.Row>
        <S.CreateText
          onClick={() => {
            setState(true);
          }}
        >
          계정 만들기
        </S.CreateText>
        <S.NextButton type="button" value={"다음"} />
      </S.Row>
    </Column>
  );
};

export default LoginModalPage;
