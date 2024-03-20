import { useRecoilState } from "recoil";
import { CommentModalStateAtom } from "../store/modal/CommentModalState";

export const useLoginModal = () => {
  const [modalState, setModalState] = useRecoilState(CommentModalStateAtom);

  const openModal = () => {
    setModalState({ show: true, animationState: true });
  };

  const closeModal = () => {
    setModalState({ ...modalState, animationState: false });
    setTimeout(() => {
      setModalState({ ...modalState, show: false });
    }, 175);
  };

  return { openModal, closeModal, modalState };
};
