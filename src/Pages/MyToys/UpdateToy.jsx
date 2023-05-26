import { Button, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
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
    subCategories,
  } = toy;
  // console.log(toy)
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = parseInt(form.price.value);
    const ratting = parseFloat(form.ratting.value);
    const quantity = parseInt(form.quantity.value);
    const subCategories = form.subCategories.value;
    const description = form.description.value;
    const updateToy = {
      price,
      ratting,
      quantity,
      subCategories,
      description,
    };
    // console.log(updateToy);

    // Send data to the server
    fetch(`https://toy-craze-marketplace-server.vercel.app/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Toy Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        navigate("/mytoys");
      });
  };
  return (
    <div className="my-8">
      <h2 className="text-2xl text-center text-semibold mb-6">
        Update Toy : {name}
      </h2>
      <form onSubmit={handleUpdate}>
        <div className="flex flex-col md:grid grid-cols-4 grid-rows-3 gap-4">
          <div className="col-span-2">
            <TextInput
              type="text"
              required={true}
              shadow={true}
              defaultValue={name}
              disabled
              placeholder="Enter Toy Name"
            />
          </div>
          <div className="col-span-2 col-start-3">
            <TextInput
              type="photoUrl"
              required={true}
              shadow={true}
              defaultValue={photo}
              disabled
              placeholder="Toy Iamge Link"
            />
          </div>
          <div className="col-span-2 row-start-2">
            <TextInput
              type="email"
              required={true}
              shadow={true}
              disabled
              placeholder="Seller Email"
              defaultValue={email}
            />
          </div>
          <div className="col-span-2 col-start-3 row-start-2">
            <TextInput
              type="text"
              required={true}
              shadow={true}
              disabled
              placeholder="Seller Name"
              defaultValue={sellerName}
            />
          </div>
          <div className="row-start-3">
            <TextInput
              type="number"
              required={true}
              shadow={true}
              name="price"
              defaultValue={price}
              placeholder="Price"
            />
          </div>
          <div className="row-start-3">
            <TextInput
              type="text"
              required={true}
              shadow={true}
              name="ratting"
              defaultValue={ratting}
              placeholder="Ratting"
            />
          </div>
          <div className="row-start-3">
            <TextInput
              type="number"
              required={true}
              shadow={true}
              name="quantity"
              defaultValue={quantity}
              placeholder="Quantity"
            />
          </div>
          <div className="row-start-3">
            <select
              defaultValue={subCategories}
              name="subCategories"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value={"Defult Catrgories"}>
                Choose a Sub-Categories
              </option>
              <option value={"Kids plug & play"}>Kids plug & play</option>
              <option value={"Kids Tablets"}>Kids Tablets</option>
              <option value={"Kids Music & Karaoke"}>
                Kids Music & Karaoke
              </option>
            </select>
          </div>
        </div>
        <div>
          <textarea
            rows="6"
            className="block p-2.5 mt-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="description"
            defaultValue={description}
            placeholder="Write a description"
          ></textarea>
        </div>
        <div className="mt-8">
          <Button
            className="w-full text-2xl rounded-md font-semibold"
            color="success"
            pill={true}
            type="submit"
          >
            Update Toy
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
