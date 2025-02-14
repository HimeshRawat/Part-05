import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";






const AppLayout = () => {
  return (
    <div className="app">
      {/* 1st HEADER  */}
      <Header />
      {/* 2nd Body */}
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
