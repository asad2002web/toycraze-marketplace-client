import AOS from "aos";
import { Card } from "flowbite-react";
import React, { useEffect } from "react";

const ToyGallery = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])
  return (
    <>
      <div className="text-center my-8 " data-aos="fade-up">
        <h3 className="text-3xl font-semibold my-4 text-orange-500">
        Future Electronics Toys
        </h3>
      </div>
      <div className="flex flex-col md:flex-row gap-8 mb-14">
        <Card className="md:w-1/3 " data-aos="fade-right">
          <img
            className="h-[250px]"
            src="https://i.ibb.co/fFrdMv5/94867340408c4c2af03c2305bfdd3408-jpg-720x720-jpg.webp"
            alt=""
          />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Brick Game 9999 in 1 -Random Color
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Creative Fashion is one of the popular brands for all type of
            products at a reasonable price.
          </p>
        </Card>
        <Card className="md:w-1/3 " data-aos="fade-down">
          <img
            className="h-[250px]"
            src="https://i.ibb.co/cwJGy4w/2d4b3477bfd614eaed54763649e83547-jpg-720x720-jpg.webp"
            alt=""
          />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Electric Mechanical Dog Science Tech Toy
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Electric Mechanical Dog Science Tech Toy Original Smart Robot Dog
            Toys Dance Voice Talking
          </p>
        </Card>
        <Card className="md:w-1/3 " data-aos="fade-left">
          <img
            className="h-[250px]"
            src="https://i.ibb.co/WkMpVqf/adc6a0f274ab502152829d3f7d8d8a86-jpg-720x720-jpg.webp"
            alt=""
          />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Remote Control Digital Radio Transmitter
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Smooth and highly sensitive to control inputs and stable at
            distances from 200-300m. Compatible with a variety of vehicles,
            suitable for RC cars, RC boats and RC tanks.
          </p>
        </Card>
      </div>
    </>
  );
};

export default ToyGallery;
