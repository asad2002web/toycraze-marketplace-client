import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Bunner from "./Bunner";

const Home = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <Bunner></Bunner>
      {/* Bunner component */}
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
          <Tab>Title 2</Tab>
        </TabList>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default Home;
