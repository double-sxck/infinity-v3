import React, { useState } from "react";
import * as S from "./style";
import { Column } from "../../../styles/ui";
import { LogoTextIcon } from "../../../assets";
import { instance } from "../../../apis/instance";
import { customErrToast, customSucToast } from "../../../toasts/customToast";

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

  const PostLogin = async () => {
    try {
      const response = await instance.post("/user/signup", {
        id: value.id,
        pwd: value.pw,
        nickname: value.nickName,
      });
      console.log("탑", response);
      customSucToast("회원가입되었습니다.");
      inputState({ id: "", pw: "", nickName: "" });
      setState(false);
    } catch (error:any) {
      console.error(error);
      if (error.response && error.response.status === 409) {
        customErrToast("아이디 또는 닉네임이 중복되었습니다.");
        setInputType(() => "id");
      } else {
        customErrToast("서버 에러가 발생했습니다.");
      }
    }
  };

  const NextButtonClickHandler = () => {
    if (inputType === "id") {
      if (value.id !== "" || value.pw !== "") {
        if (value.id === "") {
          customErrToast("아이디를 입력해주세요.");
        } else if (value.pw === "") {
          customErrToast("비밀번호를 입력해주세요.");
        } else if (value.id !== "" && value.pw !== "") {
          setInputType("nick");
        }
      } else {
        customErrToast("계정 정보를 입력해주세요.");
      }
    } else {
      if (value.nickName !== "") {
        PostLogin();
      } else {
        customErrToast("닉네임을 입력해주세요.");
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
                onChange={(e: any) =>
                  inputState({ ...value, id: e.target.value })
                }
                onKeyDown={(e: any) => {
                  if (e.key === "Enter") NextButtonClickHandler();
                }}
              />
              <S.InputText
                type="password"
                placeholder="비밀번호"
                value={value.pw}
                onChange={(e: any) =>
                  inputState({ ...value, pw: e.target.value })
                }
                onKeyDown={(e: any) => {
                  if (e.key === "Enter") NextButtonClickHandler();
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
                if (e.key === "Enter") NextButtonClickHandler();
              }}
            />
          )}
        </Column>
        <S.Empty />
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
