import React from "react";
import { Route, Routes } from "react-router-dom";
import { HeaderBar } from "./components";

function App() {
  return (
    <>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/profile" element={<></>} />
        <Route path="/write" element={<></>} />
        <Route path="/view" element={<></>} />
      </Routes>
    </>
  );
}

export default App;
