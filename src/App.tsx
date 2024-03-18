import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  HeaderBar,
  MainPage,
  Sidebar,
  UserPage,
  ViewPage,
  WritePage,
} from "./components";
import NovelSearchBox from "./components/main/search/index";
import { useLoginModal } from "./hooks/useLoginMdal";
import LoginModal from "./layout/modal";

function App() {
  const { modalState } = useLoginModal();
  return (
    <>
      {modalState.show && <LoginModal />}
      <HeaderBar />
      <Sidebar />
      <div
        style={{
          width: "calc(100vw - 24rem)",
          height: "calc(100vh - 8rem",
          position: "fixed",
          left: "24rem",
          overflow: "auto",
          padding: "4rem 12rem 12rem 4rem",
        }}
      >
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/search" element={<NovelSearchBox />} />
          <Route path="/profile" element={<UserPage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/view" element={<ViewPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
