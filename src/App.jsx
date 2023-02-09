import { useState } from "react";
import MainPage from "./components/MainPage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="md:flex">
      <Sidebar />
      <MainPage />
    </div>
  );
}

export default App;
