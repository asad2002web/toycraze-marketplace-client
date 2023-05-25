import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Providers/AuthProvider'
import MytoysList from './MytoysList';

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:4000/myToys/${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setToys(data);
          });
      }, [user]);
  return (
    <>
    <div>MyToys</div>
    <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                TOY Image
              </th>
              <th scope="col" className="px-6 py-3">
                TOY NAME
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Categories
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Update
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {
                toys.map((toy, i) => <MytoysList
                key={toy._id}
                toy={toy}
                i={i}
                ></MytoysList>)
            }
           
          </tbody>
        </table>
    </div>
    </>
  )
}

export default MyToys