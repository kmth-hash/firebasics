import React from "react";
import Header from "./Header";
import Footer from "./Footer";
function Layout(props) {
  return (
    <div>
      <Header></Header>
      <center>
        <h1 className="text-light">{props.children}</h1>
      </center>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
