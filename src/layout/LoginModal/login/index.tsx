import React, { useRef, useState } from "react";
import * as S from "./style";
import { useOutSideClick } from "../../../hooks/useOutsideClick";
import { useLoginModal } from "../../../hooks/useLoginMdal";
import { Column } from "../../../styles/ui";
import { LogoTextIcon } from "../../../assets";
import { instance } from "../../../apis/instance";

interface ChildProps {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  inputState: React.Dispatch<
    React.SetStateAction<{ id: string; pw: string; nickName: string }>
  >;
  value: { id: string; pw: string; nickName: string };
}

const LoginModalPage: React.FC<ChildProps> = ({
  setState,
  inputState,
  value,
}) => {
  const { closeModal } = useLoginModal();
  const ref = useRef<HTMLDivElement>(null); // HTMLDivElement에 대한 Ref 생성
  useOutSideClick(ref, closeModal);
  const [showPW, setShowPW] = useState<boolean>(false);
  const [faild, setFaild] = useState<boolean>(false);
  const [inputType, setInputType] = useState<string>("id");

  const NextButtonClickHandler = () => {
    if (inputType === "id") {
      if (value.id !== "") {
        setInputType("pw");
        setFaild(false);
      } else {
        setFaild(true);
      }
    } else {
      if (value.pw !== "") {
        PostLogin();
      } else {
        setFaild(true);
      }
    }
  };

  const PostLogin = async () => {
    try {
      const response = await instance.post("/user/login", {
        id: value.id,
        pwd: value.pw,
      });
      localStorage.setItem("refresh-token", response.data.token);
      closeModal();
    } catch (error) {
      setFaild(true);
      console.error(error);
    }
  };

  return (
    <Column gap={8} justifyContent="" alignItems="center">
      <div>
        <LogoTextIcon width={20} height={6.645} />
        <S.ModalMainText>
          {inputType === "id" ? "로그인" : "시작하기"}
        </S.ModalMainText>
      </div>
      <Column gap={3}>
        {inputType === "id" ? (
          <S.InputText
            type="text"
            placeholder="아이디"
            value={value.id}
            onChange={(e: any) => {
              inputState({ ...value, id: e.target.value });
            }}
            onKeyDown={(e: any) => {
              if(e.key === 'Enter') NextButtonClickHandler();
            }}
          />
        ) : (
          <S.InputText
            type={showPW ? "text" : "password"}
            placeholder="비밀번호"
            value={value.pw}
            onChange={(e: any) => {
              inputState({ ...value, pw: e.target.value });
            }}
            onKeyDown={(e: any) => {
              if(e.key === 'Enter') NextButtonClickHandler();
            }}
          />
        )}
        <S.Row2>
          {inputType === "pw" && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <input
                type="checkbox"
                id="pwCheckBox"
                checked={showPW}
                onChange={() => setShowPW(!showPW)}
                style={{
                  width: "2rem",
                  height: "2rem",
                  margin: "0 2rem 0 0",
                }}
              />
              <S.ShowPW htmlFor="pwCheckBox">비밀번호 표시</S.ShowPW>
            </div>
          )}
          {faild && <S.FaildLogin>일치하지 않습니다</S.FaildLogin>}
        </S.Row2>
        <S.Row>
          {inputType === "id" ? (
            <>
              <S.CreateText
                onClick={() => {
                  inputState({ id: "", pw: "", nickName: "" });
                  setState(true);
                }}
              >
                계정 만들기
              </S.CreateText>
              <S.NextButton
                type="button"
                value={"다음"}
                onClick={() => {
                  NextButtonClickHandler();
                }}
              ></S.NextButton>
            </>
          ) : (
            <>
              <S.NextButton
                type="button"
                value={"이전"}
                onClick={() => {
                  inputState({ id: "", pw: "", nickName: "" });
                  setInputType(() => "id");
                  setFaild(() => false);
                }}
              />
              <S.NextButton
                type="button"
                value={"다음"}
                onClick={() => {
                  NextButtonClickHandler();
                }}
              />
            </>
          )}
        </S.Row>
      </Column>
      <div></div>
    </Column>
  );
};

export default LoginModalPage;
