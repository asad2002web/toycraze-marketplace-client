import React from "react";
import Header from "../Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="mx-4 md:mx-16">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
