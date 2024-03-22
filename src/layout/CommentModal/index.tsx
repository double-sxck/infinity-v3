import React, { useLayoutEffect, useRef, useState } from "react";
import * as S from "./style";
import { useCommentModal } from "../../hooks/useCommentModal";
import { useOutSideClick } from "../../hooks/useOutsideClick";
import { Column, Row } from "../../styles/ui";
import { useGetListQuery } from "./api";
import { queryClient } from "../../App";
import { instance } from "../../apis/instance";
import { Authorization } from "../../apis/authorization";
import NovelType from "./NovelCategory";
import { CommentIcon, LikeIcon } from "../../assets";
import { CommentType } from "../../types/layoutType/CommentType";
import { MessageItem } from "../../types/layoutType/MessageItemType";

var id = 1;
var uid = 1;
const CommentModal = () => {
  const { closeCommentModal, modalCState } = useCommentModal(id);
  const ref = useRef<HTMLDivElement>(null);
  useOutSideClick(ref, () => {
    postLike();
    closeCommentModal();
  });

  const [message, setMessage] = useState<MessageItem[]>([]);

  //feed list 받아온 값을 저장하는 state
  const [comment, setComment] = useState<CommentType>();
  const [sendMessageState, setSendMessageState] = useState("");
  // query key를 지정하여 새로고침 없이 실행시킬 react query
  const { data } = useGetListQuery(id) as { data: any };

  useLayoutEffect(() => {
    getNovel();
    if (isClickable()) {
      getUser();
    }
  }, []);

  const getUser = async () => {
    try {
      console.log(Authorization());
      const response = await instance.get("/user/onlyuser", Authorization());
      console.log("유저" + response.data.uid);
      uid = response.data.uid;
    } catch (e) {
      console.error(e);
    }
  };

  const postLike = async () => {
    console.log(comment?.novelResult[0].like);
    try {
      if (localStorage.getItem("refresh-token")) {
        const responst = await instance.post(
          "/novel/like/" + id,
          Authorization()
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getComment = async () => {
    try {
      const response = await instance.get("/comment/" + id, Authorization());
      console.log(response.data);
      setMessage(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getNovel = async () => {
    try {
      id = modalCState.id;
      const response = await instance.get("/novel/" + id, Authorization());
      setComment(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // 클릭 가능 여부를 확인하는 함수
  const isClickable = () => {
    return localStorage.getItem("refresh-token") !== null;
  };

  // 클릭 시 실행되는 함수
  const handleLikeClick = () => {
    // refresh-token이 없으면 클릭 불가능하므로 함수 종료
    if (!isClickable()) return;

    setComment((prevComment) => {
      if (!prevComment) return prevComment; // 이전 상태가 없으면 그대로 반환
      const newNovelResult = prevComment.novelResult.map((novel) => {
        const newLike = !novel.like; // 이전 값의 반대로 설정
        const likeCountDiff = newLike ? 1 : -1; // likeCount의 증가 또는 감소 값
        return {
          ...novel,
          like: newLike,
          likeCount: novel.likeCount + likeCountDiff, // likeCount 업데이트
        };
      });
      return {
        ...prevComment,
        novelResult: newNovelResult,
      };
    });
  };

  const sendMessage = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === "Return") {
      // Enter 키를 눌렀는지 확인
      console.log("enter"); // sendMessageState 출력
      try {
        console.log("메시지");
        await instance.post(
          "/comment",
          {
            novel_uid: modalCState.id, // user id 가지고 와야함
            review: sendMessageState,
          },
          Authorization()
        );
        getComment();
        // query key값이 바뀔때 다시 api get 요청을 보내 새로고침 없이 개시물을 볼수 있게해주는 코드
        // queryClient.invalidateQueries({ queryKey: ["getCommentList", id - 1] });
        console.log("실행");
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <S.Page>
      <S.Modal ref={ref}>
        <Column gap={10} justifyContent="center" alignItems="center">
          <div style={{ alignSelf: "flex-start" }}>
            <Row gap={8.6}>
              <S.ImageBox img={comment?.novelResult[0].thumbnail || ""} />
              <Column gap={4}>
                <S.NovelTitle>{comment?.novelResult[0].title}</S.NovelTitle>
                <S.NovelContent>{comment?.userResult.nickname}</S.NovelContent>
                <Row gap={3}>
                  {comment?.novelResult[0].category ? (
                    <>
                      {NovelType[comment.novelResult[0].category].icon}
                      <S.NovelContent>
                        {NovelType[comment.novelResult[0].category].label}
                      </S.NovelContent>
                    </>
                  ) : (
                    <>
                      {NovelType.ETC.icon}
                      <S.NovelContent>{NovelType.ETC.label}</S.NovelContent>
                    </>
                  )}
                </Row>

                <S.NovelContent>
                  조회수 {comment?.novelResult[0].views}
                </S.NovelContent>
                <div
                  onClick={handleLikeClick}
                  style={{ cursor: isClickable() ? "pointer" : "not-allowed" }}
                >
                  <Row>
                    {comment?.novelResult[0].like ? (
                      <LikeIcon color={"#ff0000"} />
                    ) : (
                      <LikeIcon />
                    )}
                    <S.NovelContent>
                      {comment?.novelResult[0].likeCount}
                    </S.NovelContent>
                  </Row>
                </div>
              </Column>
            </Row>
          </div>
          <S.HelfLine />

          <S.NovelContent>{comment?.novelResult[0].content}</S.NovelContent>
          <S.HelfLine />
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              padding: "0rem 8.6rem",
            }}
          >
            <div className="mb-20">
              <Row alignItems="center" gap={3}>
                <CommentIcon />
                <p className="font-bold text-2xl text-gray-700">감상평 [n]개</p>
              </Row>
            </div>
            <div className="mb-20">
              <S.MessageInput
                placeholder="감상평 남기기..."
                onChange={(e) => {
                  setSendMessageState(e.target.value);
                }}
                onKeyDown={(e) => sendMessage(e)}
              />
            </div>
            {message &&
              message.map((prev) => (
                <S.MessageBox key={prev.uid} isMy={!(uid === prev.user.uid)}>
                  {prev.review}
                </S.MessageBox>
              ))}
          </div>
          <div style={{ height: "10rem" }}></div>
        </Column>
      </S.Modal>
    </S.Page>
  );
};

export default CommentModal;
