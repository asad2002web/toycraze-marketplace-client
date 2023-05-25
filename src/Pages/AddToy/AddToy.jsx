import { Button, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  //   console.log(user);

  const handleSubmit = (e) => {

    e.preventDefault();
    const form = e.target;
    const name = form.toyName.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const sellerName = form.sellerName.value;
    const price = parseInt(form.price.value);
    const ratting = parseFloat(form.ratting.value);
    const quantity = parseInt(form.quantity.value);
    const subCategories = form.subCategories.value;
    const description = form.description.value;
    const newToy = {
      name,
      photo,
      email,
      sellerName,
      price,
      ratting,
      quantity,
      subCategories,
      description,
    };
    console.log(newToy);

    // Send data to the server
    fetch("http://localhost:4000/electronicsToy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

      form.reset() //Form Reset
  };

  return (
    <div className="my-8">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:grid grid-cols-4 grid-rows-3 gap-4">
          <div className="col-span-2">
            <TextInput
              type="text"
              required={true}
              shadow={true}
              name="toyName"
              placeholder="Enter Toy Name"
            />
          </div>
          <div className="col-span-2 col-start-3">
            <TextInput
              type="photoUrl"
              required={true}
              shadow={true}
              name="photo"
              placeholder="Toy Iamge Link"
            />
          </div>
          <div className="col-span-2 row-start-2">
            <TextInput
              type="email"
              required={true}
              shadow={true}
              name="email"
              placeholder="Seller Email"
              value={user?.email}
            />
          </div>
          <div className="col-span-2 col-start-3 row-start-2">
            <TextInput
              type="text"
              required={true}
              shadow={true}
              name="sellerName"
              placeholder="Seller Name"
              defaultValue={user?.displayName}
            />
          </div>
          <div className="row-start-3">
            <TextInput
              type="number"
              required={true}
              shadow={true}
              name="price"
              placeholder="Price"
            />
          </div>
          <div className="row-start-3">
            <TextInput
              type="text"
              required={true}
              shadow={true}
              name="ratting"
              placeholder="Ratting"
            />
          </div>
          <div className="row-start-3">
            <TextInput
              type="number"
              required={true}
              shadow={true}
              name="quantity"
              placeholder="Quantity"
            />
          </div>
          <div className="row-start-3">
            <select
            defaultValue={'Defult Catrgories'}
              name="subCategories"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value={"Defult Catrgories"}>
                Choose a Sub-Categories
              </option>
              <option value={"Kids plug & play"}>Kids plug & play</option>
              <option value={"Kids Tablets"}>Kids Tablets</option>
              <option value={"Kids Music & Karaoke"}>Kids Music & Karaoke</option>
            </select>
          </div>
        </div>
        <div>
          <textarea
            rows="6"
            className="block p-2.5 mt-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="description"
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
            Add A Toy
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
