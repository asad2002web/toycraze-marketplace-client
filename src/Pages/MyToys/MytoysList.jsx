import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const MytoysList = ({ toy, i, handleDelete }) => {
  const { _id, name, photo, sellerName, price, quantity, subCategories } = toy;

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
        {name}
      </th>

      <td className="px-6 py-4">{quantity}</td>
      <td className="px-6 py-4">{subCategories}</td>
      <td className="px-6 py-4">$ {price}</td>
      <td className="px-6 py-4">
        <Link to={`/update/${_id}`}>
        <Button gradientDuoTone="cyanToBlue">Update</Button></Link>
      </td>
      <td className="px-6 py-4">
        <Button onClick={() => handleDelete(_id)} gradientDuoTone="cyanToBlue">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default MytoysList;
