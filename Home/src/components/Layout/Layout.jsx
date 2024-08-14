import React from "react";
import Header from "../Header";
import Footer from "../Footers/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div style={{ background: "var(--black)", overflow: "hidden" }}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
