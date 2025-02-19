import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { Routes, Route } from "react-router-dom";

const Body = ({ config }) => {
  return (
    <div>
      <Routes>
        {config?.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
};

export default Body;
