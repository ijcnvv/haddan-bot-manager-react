import React from "react";
import Navbar from "../components/navbar/navbar";

const Layout = ({ children }) => (
  <div className="page">
    <Navbar />
    <main className="container">
      <div className="page__container">{children}</div>
    </main>
  </div>
);

export default Layout;
