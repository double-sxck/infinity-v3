import React from "react";
import * as S from "./style";
import { Column } from "../../styles/ui";
import { LogoTextIcon } from "../../assets";

interface ChildProps {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const JoinInfinity: React.FC<ChildProps> = ({ setState }) => {
  return (
    <Column gap={8} justifyContent="center" alignItems="center">
      <div>
        <LogoTextIcon color="#000000" width={240} height={66.45} />
        <S.ModalMainText>회원가입</S.ModalMainText>
      </div>
      <S.InputText type="text" placeholder="아이디" />
      <S.Row>
        <S.CreateText
          onClick={() => {
            setState(false);
          }}
        >
          로그인
        </S.CreateText>
        <S.NextButton type="button" value={"다음"} />
      </S.Row>
    </Column>
  );
};

export default JoinInfinity;
