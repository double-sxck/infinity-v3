import { Route, Routes } from "react-router-dom";
import {
  FindPage,
  HeaderBar,
  MainPage,
  SearchPage,
  Sidebar,
  UserPage,
  ViewPage,
  WritePage,
} from "./components";
import { useLoginModal } from "./hooks/useLoginMdal";
import { useCommentModal } from "./hooks/useCommentModal";
import LoginModal from "./layout/LoginModal/modal";
import { QueryClient, QueryClientProvider } from "react-query";
import CommentModal from "./layout/CommentModal/index";
import 'react-toastify/dist/ReactToastify.css';
import { CustomToastContainer } from "./toasts/customToastContainer";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
});

function App() {
  const { modalState } = useLoginModal();
  const { modalCState } = useCommentModal(0);
  return (
    <QueryClientProvider client={queryClient}>
      <CustomToastContainer
        limit={3}
      />
      {modalCState.show && <CommentModal />}
      {modalState.show && <LoginModal />}
      <HeaderBar />
      <Sidebar />
      <div
        style={{
          width: "calc(100vw - 24rem)",
          height: "calc(100vh - 8rem)",
          position: "fixed",
          top: "9rem",
          left: "24rem",
          overflow: "auto",
          padding: "2rem 12rem",
          zIndex: "-1",
        }}
      >
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/search/:value" element={<SearchPage />} />
          <Route path="/profile/:type" element={<UserPage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/view" element={<ViewPage />} />
          <Route path="/find/:type" element={<FindPage />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
