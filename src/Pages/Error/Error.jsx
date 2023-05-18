import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div>
        <img
          className="block mt-20 mx-auto w-[300px] h-[300px]"
          src="https://i.ibb.co/C5kDvXj/6325257-min.jpg"
          alt=""
        />
        <div className="flex justify-center">
          <Link
            className="text-center px-8 py-3 bg-indigo-900 rounded-md text-white my-8"
            to="/"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
