import React from "react";
import Navbar from "../navbar/navbar";

const layout = props => (
  <div className="page">
    <Navbar />
    <main className="container">
      <div className="page__container">{props.children}</div>
    </main>
  </div>
);

export default layout;
