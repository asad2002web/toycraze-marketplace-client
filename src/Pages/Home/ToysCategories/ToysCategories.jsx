import { Button, Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { toast } from "react-toastify";

const ToysCategories = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("Kids plug & play");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    fetch(`http://localhost:4000/allToys`)
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, []);

  const toyCategories = toys.filter((item) => item?.subCategories == activeTab);
  console.log(toyCategories);
  console.log(activeTab);
  return (
    <div>
      <div>Toys by Categories</div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab onClick={() => handleTabClick("Kids plug & play")}>
            plug & play
          </Tab>
          <Tab onClick={() => handleTabClick("Kids Tablets")}>Tablets</Tab>
          <Tab onClick={() => handleTabClick("Kids Music & Karaoke")}>
            Music & Karaoke
          </Tab>
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-3 grid-rows-1 gap-4">
            {toyCategories?.map((toy) => (
              <Card>
                <img className="h-48" src={toy.photo} alt="" />
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {toy.name}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                $ {toy.price}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {toy.ratting}
              </p>
              <Button color="dark">Details</Button>
            </Card>
            ))}
          </div>
        </TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default ToysCategories;
