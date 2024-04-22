import React, { useLayoutEffect, useRef, useState } from "react";
import * as S from "./style";
import { useCommentModal } from "../../hooks/useCommentModal";
import { useOutSideClick } from "../../hooks/useOutsideClick";
import { Column, Row } from "../../styles/ui";
import { useGetListQuery } from "./api";
import { instance } from "../../apis/instance";
import { Authorization } from "../../apis/authorization";
import NovelType from "./NovelCategory";
import { CommentIcon, LikeIcon } from "../../assets";
import { CommentType } from "../../types/layoutType/CommentType";
import { MessageItem } from "../../types/layoutType/MessageItemType";
import { customWaitToast } from "../../toasts/customToast";

var id = 0;
var uid = 0;
const CommentModal = () => {
  const { closeCommentModal, modalCState } = useCommentModal(id);
  const [like, setLike] = useState<boolean>();
  const [likeCount, setLikeCount] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  useOutSideClick(ref, async () => {
    closeCommentModal();
    // window.location.reload();
    const view = document.getElementById(id.toString())?.getElementsByClassName("views")[0]
    if (view?.innerHTML !== undefined) {
      view.innerHTML = (parseInt(view?.innerHTML || "0") + 1).toString()
    }
  });

  const [message, setMessage] = useState<MessageItem[]>([]);

  //feed list 받아온 값을 저장하는 state
  const [comment, setComment] = useState<CommentType>();
  const [sendMessageState, setSendMessageState] = useState("");
  // query key를 지정하여 새로고침 없이 실행시킬 react query
  const { data } = useGetListQuery(id) as { data: any };

  useLayoutEffect(() => {
    getNovel();
    getComment();
    if (isClickable()) {
      getUser();
    }
  }, []);

  const getUser = async () => {
    try {
      const response = await instance.get("/user/onlyuser", Authorization());
      uid = response.data.uid;
    } catch (e) {
      console.error(e);
    }
  };

  const postLike = async () => {
    try {
      const requestBody = { user_uid: uid }; // user_uid를 포함한 객체 생성
      await instance.post(`/novel/like/${id}`, requestBody, Authorization());
      // console.log("실행 좋아요");
    } catch (err) {
      console.error(err);
    }
  };

  const getComment = async () => {
    try {
      const response = await instance.get("/comment/" + id, Authorization());
      // console.log(response.data)
      setMessage(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getNovel = async () => {
    try {
      id = modalCState.id;
      if (localStorage.getItem("refresh-token")) {
        const response = await instance.get(
          "/novel/loggedin/" + id,
          Authorization()
        );
        // console.log(response.data.novelResult[0]);
        setLike(response.data.novelResult[0]?.like);
        setLikeCount(response.data.novelResult[0]?.likeCount);
        setComment(response.data);
      } else {
        const response = await instance.get("/novel/" + id, Authorization());
        setLikeCount(response.data.novelResult[0]?.likeCount);
        setComment(response.data);
      }
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
    // console.log(likeCount);

    setLike(!like);

    if (
      like
    ) {
      setLikeCount(bf => bf - 1);
    } else {
      setLikeCount(bf => bf + 1);
    }
    
    postLike();
  };

  const sendMessage = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === "Return") {
      // Enter 키를 눌렀는지 확인
      // console.log("enter"); // sendMessageState 출력
      if (sendMessageState === "") return
      try {
        // console.log("메시지");
        await instance.post(
          "/comment",
          {
            novel_uid: modalCState.id, // user id 가지고 와야함
            review: sendMessageState,
          },
          Authorization()
        );
        setSendMessageState("");
        getComment();
        if (ref.current) {
          ref.current.scrollTop = ref.current.scrollHeight;
        }
        // query key값이 바뀔때 다시 api get 요청을 보내 새로고침 없이 개시물을 볼수 있게해주는 코드
        // queryClient.invalidateQueries({ queryKey: ["getCommentList", id - 1] });
        // console.log("실행");
      } catch (err) {
        console.error(err);
      }
    }
  };

  const deleteNovel = async () => {
    customWaitToast("소설 삭제 중...");
    try {
      await instance.delete(
        "/novel/" + id,
        Authorization()
      );
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <S.Page>
      <S.Modal ref={ref}>
        <Column gap={10} justifyContent="center" alignItems="center">
          <div style={{ display: "flex", alignSelf: "center" }}>
            <Row gap={8.6}>
              {comment?.novelResult ?
                <S.ImageBox
                  $img={comment.novelResult[0]?.thumbnail}
                /> :
                <S.EmptyImageBox />
              }
              <Column gap={4}>
                {comment?.novelResult ?
                  <S.NovelTitle>
                    {comment.novelResult[0]?.title}
                  </S.NovelTitle> :
                  <S.EmptyNovelTitle />
                }
                {comment?.novelResult ?
                  <S.NovelContent>
                    {comment?.userResult?.nickname}
                  </S.NovelContent> :
                  <S.EmptyNovelContent />
                }
                <Row gap={2}>
                  {comment?.novelResult ? comment.novelResult[0]?.category ? (
                    <>
                      {NovelType[comment.novelResult[0]?.category]?.icon}
                      <S.NovelContent>
                        {NovelType[comment.novelResult[0]?.category]?.label}
                      </S.NovelContent>
                    </>
                  ) : (
                    <>
                      {NovelType.ETC.icon}
                      <S.NovelContent>{NovelType.ETC.label}</S.NovelContent>
                    </>
                  ) : <S.EmptyNovelContent1 />}
                </Row>
                {comment?.novelResult ?
                  <S.NovelContent>
                    조회수 {comment.novelResult[0]?.views}회
                  </S.NovelContent> :
                  <S.EmptyNovelContent />
                }
                <div
                  onClick={handleLikeClick}
                  style={{ cursor: isClickable() ? "pointer" : "default" }}
                >
                  <Row gap={2} alignItems="center">
                    {like ? <LikeIcon color={"#ff0000"} /> : <LikeIcon />}
                    {comment?.novelResult ?
                      <S.NovelContent>
                        {likeCount}
                        </S.NovelContent> :
                      <S.EmptyNovelContent />
                    }
                  </Row>
                </div>
              </Column>
            </Row>
            {comment?.novelResult[0].user_uid === uid && <S.DeleteNovel onClick={() => deleteNovel()}>삭제</S.DeleteNovel>}
          </div>
          <S.HelfLine />
          <S.NovelContent>
            {comment?.novelResult ?
              <pre style={{ whiteSpace: "pre-wrap" }}>
                {comment?.novelResult[0]?.content}
              </pre> :
              <Column gap={4}>
                <S.EmptyNovel />
                <S.EmptyNovel />
                <S.EmptyNovel />
              </Column>
            }
            
          </S.NovelContent>
          <S.HelfLine />
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              padding: "0rem 8.6rem",
            }}
          >
            <div className="mb-16">
              <Row alignItems="center" gap={2}>
                <CommentIcon />
                <S.Comment>감상평 {message.length}개</S.Comment>
              </Row>
            </div>
            <div className="mb-12">
              <S.MessageInput
                placeholder={localStorage.getItem("refresh-token") !== null ? "감상평 남기기..." : "댓글을 남기려면 로그인해주세요"}
                disabled={localStorage.getItem("refresh-token") === null}
                value={sendMessageState}
                onChange={(e: any) => {
                  setSendMessageState(e.target.value);
                }}
                onKeyDown={(e: any) => sendMessage(e)}
              />
            </div>
            {message &&
              message
                .map((prev) => (
                  <S.MessageWrapper key={prev.uid} $isMy={!(uid === prev.user.uid)}>
                    <S.MessageUser $isMy={!(uid === prev.user.uid)}>
                      {prev.user.nickname}
                    </S.MessageUser>
                    <S.MessageBox $isMy={!(uid === prev.user.uid)}>
                      {prev.review}
                    </S.MessageBox>
                  </S.MessageWrapper>
                ))}
          </div>
        </Column>
      </S.Modal>
    </S.Page>
  );
};

export default CommentModal;
