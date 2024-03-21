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
    // getComment();
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
  // query key를 지정하여 새로고침 없이 실행시킬 react query
  const { data } = useGetListQuery(id) as { data: any };
  useLayoutEffect(() => {
    setMessage(data);
  }, [data]);

  useLayoutEffect(() => {
    getComment();
  }, []);

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

  const sendMessage = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "enter") {
      // Enter 키를 눌렀는지 확인
      queryClient.invalidateQueries({ queryKey: ["getList", id - 1] });
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
                <Row>
                  {comment[0].novelResult[0].like ? (
                    <LikeIcon color={"#ff0000"} />
                  ) : (
                    <LikeIcon />
                  )}
                  <S.NovelContent>
                    {comment[0].novelResult[0].uid}
                  </S.NovelContent>
                </Row>
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
                onChange={(e) => {}}
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
