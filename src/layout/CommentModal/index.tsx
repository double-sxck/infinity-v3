import React, { useRef } from "react";
import * as S from "./style";
import { useCommentModal } from "../../hooks/useCommentModal";
import { useOutSideClick } from "../../hooks/useOutsideClick";

const CommentModal = () => {
  const { closeCommentModal } = useCommentModal();
  const ref = useRef<HTMLDivElement>(null);
  useOutSideClick(ref, closeCommentModal);
  return (
    <S.Page>
      <S.Modal ref={ref}></S.Modal>
    </S.Page>
  );
};

export default CommentModal;
