import React from "react";
import { Route, Routes } from "react-router-dom";
import { HeaderBar, MainPage, Sidebar, UserPage } from "./components";
import NovelSearchBox from "./components/main/search/index";

function App() {
  return (
    <>
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
          <Route path="/write" element={<></>} />
          <Route path="/view" element={<></>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
