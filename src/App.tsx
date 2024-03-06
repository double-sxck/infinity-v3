import React from "react";
import { Route, Routes } from "react-router-dom";
import { HeaderBar, Sidebar } from "./components";

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
        }}
      >
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/profile" element={<></>} />
          <Route path="/write" element={<></>} />
          <Route path="/view" element={<></>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
