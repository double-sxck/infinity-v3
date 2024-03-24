import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  FindPage,
  HeaderBar,
  MainPage,
  Sidebar,
  UserPage,
  ViewPage,
  WritePage,
} from "./components";
import NovelSearchBox from "./components/main/search/index";
import { useLoginModal } from "./hooks/useLoginMdal";
import { useCommentModal } from "./hooks/useCommentModal";
import LoginModal from "./layout/LoginModal/modal";
import { QueryClient, QueryClientProvider } from "react-query";
import CommentModal from "./layout/CommentModal/index";

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
      {modalCState.show && <CommentModal />}
      {modalState.show && <LoginModal />}
      <HeaderBar />
      <Sidebar />
      <div
        style={{
          width: "calc(100vw - 24rem)",
          height: "calc(100vh - 8rem)",
          position: "fixed",
          top: "16.5rem",
          left: "24rem",
          overflow: "auto",
          padding: "0rem 12rem",
        }}
      >
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/search" element={<MainPage />} />
          <Route path="/category/:category" element={<MainPage />} />
          <Route path="/profile" element={<UserPage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/view" element={<ViewPage />} />
          <Route path="/find/:type" element={<FindPage />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
