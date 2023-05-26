import { Card } from "flowbite-react";
import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toy = useLoaderData();
  const {
    _id,
    name,
    email,
    ratting,
    photo,
    sellerName,
    price,
    description,
    quantity,
  } = toy;
  return (
    <>
      <h2 className="text-2xl mt-4 text-center text-semibold mb-6">
        Details Toy : {name}
      </h2>
      <div className="md:flex justify-center gap-6 my-10 items-center">
        <div>
            <img className="w-96 h-96 mb-8 block mx-auto" src={photo} alt="" />
        </div>
        <div>
            <Card>
            <h3 className="text-xl font-semibold text-indigo-700">Toy Name : {name}</h3>
            <p>Seller Name: {sellerName}</p>
            <p>Seller Email: {email}</p>
            <p>Toy Price: {price}</p>
            <p>Ratting: {ratting}</p>
            <p>Quantiry: {quantity}</p>
            <p>Description: {description}</p>
            </Card>
        </div>
      </div>
    </>
  );
};

export default ToyDetails;
