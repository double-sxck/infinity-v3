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

interface CommentType {
  userResult: {
    nickname: string;
  };
  novelResult: {
    uid: number;
    user_uid: number;
    title: string;
    content: string;
    thumbnail: string;
    category: string;
    views: number;
    novel_likes: { user_uid: number; novel_uid: number }[];
    like?: boolean;
    likeCount: number;
  }[];
}

var id = 1;
const CommentModal = () => {
  const { closeCommentModal, modalCState } = useCommentModal(id);
  const ref = useRef<HTMLDivElement>(null);
  useOutSideClick(ref, () => {
    console.log(id, "열렸다잉");
    postLike();
    closeCommentModal();
  });

  const [message, setMessage] = useState();

  //feed list 받아온 값을 저장하는 state
  const [comment, setComment] = useState<CommentType[]>([
    {
      userResult: {
        nickname: "aaaa",
      },
      novelResult: [
        {
          uid: 1,
          user_uid: 4,
          title: "새로운 포스트 제목",
          content: "포스트 내용",
          thumbnail: "이미지 URL 또는 경로",
          category: "ETC",
          views: 1034,
          novel_likes: [
            {
              user_uid: 4,
              novel_uid: 1,
            },
          ],
          likeCount: 1,
        },
      ],
    },
  ]);
  const [sendMessageState, setSendMessageState] = useState("");
  // query key를 지정하여 새로고침 없이 실행시킬 react query
  const { data } = useGetListQuery(id) as { data: any };
  useLayoutEffect(() => {
    setMessage(data);
  }, [data]);

  useLayoutEffect(() => {
    getComment();
    if (isClickable()) {
      getUser();
    }
  }, []);

  const getUser = async () => {
    try {
      console.log(Authorization());
      // const response = await instance.get("/user/onlyuser", {
      //   headers: {
      //     Authorization: `Bearer ${localStorage.getItem("refresh-token")}`, // Replace 'yourAccessToken' with the actual access token
      //     // Add other headers if needed
      //   },
      // });
      const response = await instance.get("/user/onlyuser", Authorization());
      console.log(response.data.uid);
    } catch (e) {
      console.error(e);
    }
  };

  const postLike = async () => {
    console.log(comment[0].novelResult[0].like);
    try {
      if (localStorage.getItem("refresh-token")) {
        await instance.post("/novel/like/" + id, Authorization());
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getComment = async () => {
    console.log("실행");
    try {
      id = modalCState.id;
      console.log("아이디" + id);
      const response = await instance.get("/novel/" + id, Authorization());
      setComment(response.data);
      console.log(response.data);
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
      const newNovelResult = prevComment[0].novelResult.map((novel) => {
        const newLike = !novel.like; // 이전 값의 반대로 설정
        const likeCountDiff = newLike ? 1 : -1; // likeCount의 증가 또는 감소 값
        return {
          ...novel,
          like: newLike,
          likeCount: novel.likeCount + likeCountDiff, // likeCount 업데이트
        };
      });
      return [
        {
          ...prevComment[0],
          novelResult: newNovelResult,
        },
      ];
    });
  };

  const sendMessage = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === "Return") {
      // Enter 키를 눌렀는지 확인
      console.log("enter"); // sendMessageState 출력
      try {
        const response = await instance.post(
          "/comment/" + id,
          {
            novel_uid: 1, // user id 가지고 와야함
            review: "와정말재밌어요.",
          },
          Authorization()
        );
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
              <S.ImageBox />
              <Column gap={4}>
                <S.NovelTitle>{comment[0].novelResult[0].title}</S.NovelTitle>
                <S.NovelContent>
                  {comment[0].userResult.nickname}
                </S.NovelContent>
                <Row gap={3}>
                  {comment[0]?.novelResult[0].category ? (
                    <>
                      {NovelType[comment[0].novelResult[0].category].icon}
                      <S.NovelContent>
                        {NovelType[comment[0].novelResult[0].category].label}
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
                  조회수 {comment[0].novelResult[0].views}
                </S.NovelContent>
                <div
                  onClick={handleLikeClick}
                  style={{ cursor: isClickable() ? "pointer" : "not-allowed" }}
                >
                  <Row>
                    {comment[0].novelResult[0].like ? (
                      <LikeIcon color={"#ff0000"} />
                    ) : (
                      <LikeIcon />
                    )}
                    <S.NovelContent>
                      {comment[0].novelResult[0].likeCount}
                    </S.NovelContent>
                  </Row>
                </div>
              </Column>
            </Row>
          </div>
          <S.HelfLine />

          <S.NovelContent>{comment[0].novelResult[0].content}</S.NovelContent>
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
            <S.MessageBox isMy={true}>힝구리핑퐁</S.MessageBox>
            <S.MessageBox isMy={false}>퐁퐁남</S.MessageBox>
          </div>
          <div style={{ height: "10rem" }}></div>
        </Column>
      </S.Modal>
    </S.Page>
  );
};

export default CommentModal;
