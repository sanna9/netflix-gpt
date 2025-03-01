import React from "react";
import Header from "../pages/Header";

const Layout = ({ children, bodyClassName }) => {
  return (
    <div className={bodyClassName}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
