import React from "react";
import { useLoaderData } from "react-router-dom";
import AllToyTable from "./AllToyTable";

const AllToys = () => {
  const allToys = useLoaderData();
  console.log(allToys);
  return (
    <>
      <div>AllToys</div>
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
            {
                allToys.map((toy, i) => <AllToyTable
                key={toy._id}
                toy={toy}
                i={i}
                ></AllToyTable>)
            }
           
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllToys;
