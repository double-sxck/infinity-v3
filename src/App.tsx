import React from "react";
import { Route, Routes } from "react-router-dom";
import { HeaderBar, Sidebar } from "./components";

function App() {
  return (
    <>
      <HeaderBar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<>nigger</>} />
        <Route path="/profile" element={<></>} />
        <Route path="/write" element={<></>} />
        <Route path="/view" element={<></>} />
      </Routes>
    </>
  );
}

export default App;
