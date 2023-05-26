import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllToyTable from "./AllToyTable";
import { Button } from "flowbite-react";

const AllToys = () => {
  // const allToys = useLoaderData();

  const [allToys, setAllToys] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetch('https://toy-craze-marketplace-server.vercel.app/allToys')
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  }, []);

    // Search
    const handleSearch = () => {
      fetch(`https://toy-craze-marketplace-server.vercel.app/${searchText}`)
        .then((res) => res.json())
        .then((data) => {
          setAllToys(data);
        });
    };
  return (
    <>
      <div className="text-xl text-center font-semibold mt-4 text-indigo-700">
        All Toys
      </div>
      <div className="flex items-center justify-center gap-3">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          id="first_name"
          className="w-1/2 my-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Your Toy"
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                SELLER NAME
              </th>
              <th scope="col" className="px-6 py-3">
                TOY NAME
              </th>
              <th scope="col" className="px-6 py-3">
                SUB CATEGORY
              </th>
              <th scope="col" className="px-6 py-3">
                PRICE
              </th>
              <th scope="col" className="px-6 py-3">
                AVAILABLE Q.
              </th>
              <th scope="col" className="px-6 py-3">
                DETAILS
              </th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((toy, i) => (
              <AllToyTable key={toy._id} toy={toy} i={i}></AllToyTable>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllToys;
