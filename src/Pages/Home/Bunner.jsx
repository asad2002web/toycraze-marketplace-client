import { Carousel } from "flowbite-react";
import React from "react";

const Bunner = () => {
  return (
    <div>
      <div className="h-56 my-12 sm:h-64 xl:h-96 2xl:h-96">
        <Carousel>
          <img
            src="https://i.ibb.co/Sx21yJX/photo-1582571352032-448f7928eca3.jpg"
            alt="..."
          />
          <img
            src="https://i.ibb.co/PDK4JtD/istockphoto-867830532-612x612.jpg"
            alt="..."
          />
          <img
            src="https://i.ibb.co/D7kXwk7/istockphoto-1322274556-170667a.jpg"
            alt="..."
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Bunner;
