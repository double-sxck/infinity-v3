import React, { useState } from "react";
import * as S from "./style";
import { Column } from "../../styles/ui";
import { LogoTextIcon } from "../../assets";
import CustomAxios from "../../axios/customAxios";
import { instance } from "../../apis/instance";

interface ChildProps {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  inputState: React.Dispatch<
    React.SetStateAction<{ id: string; pw: string; nickName: string }>
  >;
  value: { id: string; pw: string; nickName: string };
}

const JoinInfinity: React.FC<ChildProps> = ({
  setState,
  inputState,
  value,
}) => {
  const [inputType, setInputType] = useState<string>("id");
  const [err, setErr] = useState<boolean>(false);

  const PostLogin = async () => {
    try {
      console.log("회원가입");
      console.log(value);
      const response = await instance.post("/user/signup", {
        id: value.id,
        pwd: value.pw,
        nickname: value.nickName,
      });
      inputState({ id: "", pw: "", nickName: "" });
      console.log(response.data);
      setState(false);
    } catch (e) {
      console.error(e);
    }
  };

  const NextButtonClickHandler = () => {
    if (inputType === "id") {
      if (value.id !== "") {
        setInputType("pw");
      } else {
        setErr(true);
      }
    } else if (inputType === "pw") {
      if (value.pw !== "") {
        setInputType("nick");
      } else {
        setErr(true);
      }
    } else {
      PostLogin();
    }
  };

  return (
    <Column gap={7} justifyContent="center" alignItems="center">
      <div>
        <LogoTextIcon color="#000000" width={240} height={66.45} />
        <S.ModalMainText>회원가입</S.ModalMainText>
      </div>
      <div>
        {inputType === "id" ? (
          <S.InputText
            type="email"
            placeholder="아이디"
            value={value.id}
            onChange={(e) => inputState({ ...value, id: e.target.value })}
          />
        ) : inputType === "pw" ? (
          <S.InputText
            type="password"
            placeholder="비밀번호"
            value={value.pw}
            onChange={(e) => inputState({ ...value, pw: e.target.value })}
          />
        ) : (
          <S.InputText
            type="email"
            placeholder="닉네임"
            value={value.nickName}
            onChange={(e) => inputState({ ...value, nickName: e.target.value })}
          />
        )}

        {err && <S.ErrorMsg>모든 입력란에 작성해주세요</S.ErrorMsg>}
      </div>
      <S.Row>
        <S.CreateText
          onClick={() => {
            inputState({ id: "", pw: "", nickName: "" });
            setState(false);
          }}
        >
          로그인
        </S.CreateText>
        <S.NextButton
          type="button"
          value={"다음"}
          onClick={() => {
            NextButtonClickHandler();
          }}
        />
      </S.Row>
    </Column>
  );
};

export default JoinInfinity;
