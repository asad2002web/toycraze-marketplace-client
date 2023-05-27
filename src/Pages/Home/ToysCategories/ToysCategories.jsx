import Aos from "aos";
import { Button, Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { toast } from "react-toastify";

const ToysCategories = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("Kids plug & play");
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    fetch(`https://toy-craze-marketplace-server-asad2002web-gmailcom.vercel.app`)
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
          <div data-aos="fade-right" className="md:grid grid-cols-3 grid-rows-1 gap-4 mt-6">
            {toyCategories?.map((toy) => (
              <Card key={toy._id}>
                <img className="h-56 block mx-auto" src={toy.photo} alt="" />
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {toy.name}
                </h5>
                <div className="flex justify-between items-center">
                  <p className="font-normal text-indigo-700 dark:text-indigo-400">
                    Ratting: {toy.ratting}{" "}
                    <FaStar className="inline pb-1"></FaStar>
                  </p>
                  <p className="font-semibold text-indigo-700 dark:text-indigo-400">
                    $ {toy.price}
                  </p>
                </div>

                <Link to={`/toydetails/${toy._id}`}>
                <Button className="mt-8" color="dark">
                  Details
                </Button>
                </Link>
              </Card>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div data-aos="fade-left" className="md:grid grid-cols-3 grid-rows-1 gap-4 mt-6">
            {toyCategories?.map((toy) => (
              <Card key={toy._id}>
                <img className="h-56 block mx-auto" src={toy.photo} alt="" />
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {toy.name}
                </h5>
                <div className="flex justify-between items-center">
                  <p className="font-normal text-indigo-700 dark:text-indigo-400">
                    Ratting: {toy.ratting}{" "}
                    <FaStar className="inline pb-1"></FaStar>
                  </p>
                  <p className="font-semibold text-indigo-700 dark:text-indigo-400">
                    $ {toy.price}
                  </p>
                </div>
                <Button className="mt-8" color="dark">
                  Details
                </Button>
              </Card>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div data-aos="fade-right" className="md:grid grid-cols-3 grid-rows-1 gap-4 mt-6">
            {toyCategories?.map((toy) => (
              <Card key={toy._id}>
                <img className="h-56 block mx-auto" src={toy.photo} alt="" />
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {toy.name}
                </h5>
                <div className="flex justify-between items-center">
                  <p className="font-normal text-indigo-700 dark:text-indigo-400">
                    Ratting: {toy.ratting}{" "}
                    <FaStar className="inline pb-1"></FaStar>
                  </p>
                  <p className="font-semibold text-indigo-700 dark:text-indigo-400">
                    $ {toy.price}
                  </p>
                </div>

                <Button className="mt-8" color="dark">
                  Details
                </Button>
              </Card>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ToysCategories;
