import { useRecoilState } from "recoil";
import { CommentModalStateAtom } from "../store/modal/CommentModalState";

export const useCommentModal = () => {
  const [modalCState, setModalState] = useRecoilState(CommentModalStateAtom);

  const openCommentModal = () => {
    setModalState({ show: true, animationState: true });
  };

  const closeCommentModal = () => {
    setModalState({ ...modalCState, animationState: false });
    setTimeout(() => {
      setModalState({ ...modalCState, show: false });
    }, 175);
  };

  return { openCommentModal, closeCommentModal, modalCState };
};
