import React from "react";
import { Outlet } from "react-router";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <div className="bg-amber-300">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
