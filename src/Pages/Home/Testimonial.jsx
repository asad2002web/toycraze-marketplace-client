import { Card } from "flowbite-react";
import React from "react";

const Testimonial = () => {
  return (
    <div>
      <div className="text-center mt-8">
        <h3 className="text-3xl font-semibold my-2 text-orange-500">Testimonial</h3>
        <h5 className="text-md">What Our Customer Says</h5>
      </div>

      <div className="my-8 flex flex-col md:flex-row justify-between gap-x-6 gap-y-6">
        <Card>
          <div className="flex items-center gap-4">
            <div>
              <img
                className="w-16 h-16 border-gray-700 border-2 rounded-full"
                src="https://i.ibb.co/GM1YvDg/image-2-1.png"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-xl font-medium">Winson Herry</h2>
              <p>California</p>
            </div>
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            It is a long established fact that by the readable content of a lot
            layout. The point of using Lorem a more-or-less normal distribu to
            using Content here, content
          </p>
        </Card>
        <Card>
          <div className="flex items-center gap-4">
            <div>
              <img
                className="w-16 h-16 border-gray-700 border-2 rounded-full"
                src="https://i.ibb.co/GM1YvDg/image-2-1.png"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-xl font-medium">Winson Herry</h2>
              <p>California</p>
            </div>
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            It is a long established fact that by the readable content of a lot
            layout. The point of using Lorem a more-or-less normal distribu to
            using Content here, content
          </p>
        </Card>
        <Card>
          <div className="flex items-center gap-4">
            <div>
              <img
                className="w-16 h-16 border-gray-700 border-2 rounded-full"
                src="https://i.ibb.co/GM1YvDg/image-2-1.png"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-xl font-medium">Winson Herry</h2>
              <p>California</p>
            </div>
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            It is a long established fact that by the readable content of a lot
            layout. The point of using Lorem a more-or-less normal distribu to
            using Content here, content
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Testimonial;

// https://i.ibb.co/nBXdp7c/image-4.png
// https://i.ibb.co/s2C56RX/image-1-1.png
// https://i.ibb.co/GM1YvDg/image-2-1.png
// https://i.ibb.co/zFHq1tv/image-3-1.png
