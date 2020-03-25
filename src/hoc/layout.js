import React from "react";
import PropTypes from "prop-types";
import Navbar from "../components/navbar/navbar";

const Layout = ({ children }) => (
  <div className="page">
    <Navbar />
    <main className="container">
      <div className="page__container">{children}</div>
    </main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
