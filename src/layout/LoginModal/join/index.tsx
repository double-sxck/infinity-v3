import React, { useState } from "react";
import * as S from "./style";
import { Column } from "../../../styles/ui";
import { LogoTextIcon } from "../../../assets";
import CustomAxios from "../../../axios/customAxios";
import { instance } from "../../../apis/instance";

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
      if (value.id !== "" && value.pw !== "") {
        setInputType("nick");
        setErr(false);
      } else {
        setErr(true);
      }
    } else {
      if (value.nickName !== "") {
        PostLogin();
      } else {
        setErr(true);
      }
    }
  };

  return (
    <Column gap={7} justifyContent="center" alignItems="center">
      <div>
        <LogoTextIcon width={20} height={6.645} />
        <S.ModalMainText>
          {inputType === "id" ? "계정 만들기" : "닉네임 설정"}
        </S.ModalMainText>
      </div>
      <Column gap={3}>
        <Column gap={7}>
          {inputType === "id" ? (
            <>
              <S.InputText
                type="email"
                placeholder="아이디"
                value={value.id}
                onChange={(e: any) => inputState({ ...value, id: e.target.value })}
                onKeyDown={(e: any) => {
                  if(e.key === 'Enter') NextButtonClickHandler();
                }}
              />
              <S.InputText
                type="password"
                placeholder="비밀번호"
                value={value.pw}
                onChange={(e: any) => inputState({ ...value, pw: e.target.value })}
                onKeyDown={(e: any) => {
                  if(e.key === 'Enter') NextButtonClickHandler();
                }}
              />
            </>
          ) : (
            <S.InputText
              type="email"
              placeholder="닉네임"
              value={value.nickName}
              onChange={(e: any) =>
                inputState({ ...value, nickName: e.target.value })
              }
              onKeyDown={(e: any) => {
                if(e.key === 'Enter') NextButtonClickHandler();
              }}
            />
          )}
        </Column>
        {err ? (
          <S.ErrorMsg>모든 입력란에 작성해주세요</S.ErrorMsg>
        ) : (
          <S.Empty />
        )}
        <S.Row>
          {inputType === "id" ? (
            <S.CreateText
              onClick={() => {
                inputState({ id: "", pw: "", nickName: "" });
                setState(false);
              }}
            >
              로그인하기
            </S.CreateText>
          ) : (
            <S.CreateText
              onClick={() => {
                inputState({ id: "", pw: "", nickName: "" });
                setInputType(() => "id");
                setErr(false);
              }}
            >
              돌아가기
            </S.CreateText>
          )}
          <S.NextButton
            type="button"
            value={"다음"}
            onClick={() => {
              NextButtonClickHandler();
            }}
          />
        </S.Row>
      </Column>
    </Column>
  );
};

export default JoinInfinity;
