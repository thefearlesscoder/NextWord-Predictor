import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import TryItOut from "./TryItOut";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/predict" element={<TryItOut />} />
    </Routes>
  );
}

export default App;
