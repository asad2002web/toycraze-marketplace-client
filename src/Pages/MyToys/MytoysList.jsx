import { Button } from "flowbite-react";
import React from "react";

const MytoysList = ({ toy, i }) => {
  const { photo, sellerName, price, quantity, subCategories } = toy;
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className=" text-center">{i + 1}</td>
      <td className="px-6 py-4">
        <img className="w-12 h-12" src={photo} alt="" />
      </td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {sellerName}
      </th>

      <td className="px-6 py-4">{quantity}</td>
      <td className="px-6 py-4">{subCategories}</td>
      <td className="px-6 py-4">$ {price}</td>
      <td className="px-6 py-4">
        <Button gradientDuoTone="cyanToBlue">Update</Button>
      </td>
      <td className="px-6 py-4">
        <Button gradientDuoTone="cyanToBlue">Delete</Button>
      </td>
    </tr>
  );
};

export default MytoysList;
