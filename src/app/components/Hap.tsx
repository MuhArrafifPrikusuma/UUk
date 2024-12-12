import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";  // Import FaHome
import { FaList } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { PiCurrencyCircleDollarFill } from "react-icons/pi";

function Hap() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Users table component
  const Users = () => {
    const users = [
      { name: 'Pat Black', accessStatus: 'Admin', email: 'bill.berry@example.com', age: 28 },
      { name: 'Angel Jones', accessStatus: 'Admin', email: 'glen.ramirez@example.com', age: 36 },
      { name: 'Max Edwards', accessStatus: 'Employee', email: 'renee.hughes@example.com', age: 27 },
      { name: 'Bruce Fox', accessStatus: 'Employee', email: 'craig.kelley@example.com', age: 43 },
      { name: 'Devon Fisher', accessStatus: 'Employee', email: 'joy.ramos@example.com', age: 32 },
    ];

    return (
      <div className="relative overflow-x-auto w-3/4 mx-auto my-4">
        <h1 className='text-3xl font-bold'> All User</h1>
        <table className="w-full text-sm text-left rtl:text-right text-dark">
          <thead className="text-xs text-primary uppercase bg-gray-300 ">
            <tr>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Access Status</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Age</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user.name}
                </td>
                <td className="px-6 py-4">{user.accessStatus}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <>
      {/* Fixed Show Navigation Button */}
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
        <button
          onClick={toggleDrawer}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          aria-controls="drawer-navigation"
          aria-expanded={isDrawerOpen ? 'true' : 'false'}
        >
          Show navigation
        </button>
      </div>

      {/* Drawer component */}
      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} bg-gray-200`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
        <button
          onClick={toggleDrawer}
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaHome className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3">Home</span>
              </a>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaHome className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-100" />
                <span className="ms-3 text-dark hover:text-gray-100">Home</span>
              </a>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaList className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-100" />
                <span className="ms-3 text-dark hover:text-gray-100">Inventory</span>
              </a>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaUser className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-100" />
                <span className="ms-3 text-dark hover:text-gray-100">All Account</span>
              </a>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <PiCurrencyCircleDollarFill className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-100" />
                <span className="ms-3 text-dark hover:text-gray-100">Transaction</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Users Table */}
      <Users />
    </>
  );
}

export default Hap;
