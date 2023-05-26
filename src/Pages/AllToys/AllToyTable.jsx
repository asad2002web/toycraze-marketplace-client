import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const AllToyTable = ({ toy, i }) => {
  const { _id, name, sellerName, price, quantity, subCategories } = toy;
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className=" text-center">{i + 1}</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {sellerName}
      </th>
      <td className="px-6 py-4">{name}</td>
      <td className="px-6 py-4">{subCategories}</td>
      <td className="px-6 py-4">{price}</td>
      <td className="px-6 py-4">{quantity}</td>
      <td className="px-6 py-4">
        <Link to={`/toydetails/${_id}`}>
          <Button gradientDuoTone="cyanToBlue">Details</Button>
        </Link>
      </td>
    </tr>
  );
};

export default AllToyTable;
