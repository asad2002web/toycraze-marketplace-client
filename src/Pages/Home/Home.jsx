import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Bunner from "./Bunner";
import Testimonial from "./Testimonial";
import FAQuestion from "./FAQuestion";
import ToyGallery from "./ToyGallery";
import { ToastContainer } from "react-toastify";
import ToysCategories from "./ToysCategories/ToysCategories";

const Home = () => {
  return (
    <div>
      <Bunner></Bunner>
      <ToysCategories></ToysCategories>
      <ToyGallery></ToyGallery>
      <FAQuestion></FAQuestion>
      <Testimonial></Testimonial>
      <ToastContainer />
    </div>
  );
};

export default Home;
