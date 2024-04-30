import { useRecoilState } from "recoil";
import { loginModalStateAtom } from "../storage/modal/loginModalState";

export const useLoginModal = () => {
  const [modalState, setModalState] = useRecoilState(loginModalStateAtom);

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
