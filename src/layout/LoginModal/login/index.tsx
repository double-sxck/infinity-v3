import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import { useOutSideClick } from "../../../hooks/useOutsideClick";
import { useLoginModal } from "../../../hooks/useLoginMdal";
import { Column } from "../../../styles/ui";
import { LogoTextIcon } from "../../../assets";
import { instance } from "../../../apis/instance";
import { customErrToast, customSucToast } from "../../../toasts/customToast";
import { Storage } from "../../../storage/token";

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
  const [inputType, setInputType] = useState<string>("id");
  const focusRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    focusRef.current?.focus();
  }, []);

  const NextButtonClickHandler = () => {
    if (inputType === "id") {
      if (value.id !== "") {
        setInputType("pw");
      } else {
        customErrToast("아이디를 입력해주세요.");
      }
    } else {
      if (value.pw !== "") {
        PostLogin();
      } else {
        customErrToast("비밀번호를 입력해주세요.");
      }
    }
  };

  const PostLogin = async () => {
    try {
      const response = await instance.post("/user/login", {
        id: value.id,
        pwd: value.pw,
      });
      Storage.setItem("refresh-token", response.data.token);
      Storage.setItem("access-token", response.data.token);
      customSucToast("로그인되었습니다.");
      closeModal();
    } catch (error) {
      customErrToast("일치하는 정보가 없습니다.");
      inputState({ ...value, pw: "" });
      setInputType("id");
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
              if (e.key === "Enter") NextButtonClickHandler();
            }}
            ref={focusRef}
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
              if (e.key === "Enter") NextButtonClickHandler();
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
                  cursor: "pointer",
                }}
              />
              <S.ShowPW htmlFor="pwCheckBox">비밀번호 표시</S.ShowPW>
            </div>
          )}
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
