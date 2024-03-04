import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/profile" element={<></>} />
        <Route path="/write" element={<></>} />
        <Route path="/view" element={<></>} />
      </Routes>
    </div>
  );
}

export default App;
