import React from "react";
import PropTypes from "prop-types";
// import Header, Footer

function Layout({ children }) {
  return (
    <>
      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
      <div id="modal"></div>
    </>
  );
}

Layout.prototype = {
  children: PropTypes.node,
};

export default Layout;
