import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-full md:w-64 bg-white shadow-md h-full">
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">FOODI <span className='text-green'>Admin</span></h2>
          <Link to={"/Dashboard"}>        <img src='logo3.png' alt='admin logo' width={"80px"}  className='ml-5 mb-5'/>
          </Link>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link to="/Dashboard" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded transition duration-200">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/booking" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded transition duration-200">
                Manage Bookings
              </Link>
            </li>
            <li>
              <Link to="/add-menu" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded transition duration-200">
                Add Menu
              </Link>
            </li>
            <li>
              <Link to="/manage-items" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded transition duration-200">
                Manage Items
              </Link>
            </li>
            <li>
              <Link to="/user" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded transition duration-200">
                Users
              </Link>
            </li>
            <li>
              <Link to="/Dashboard" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded transition duration-200">
                Home
              </Link>
            </li>
            {/* <li>
              <Link to="/menu" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded transition duration-200">
                Menu
              </Link>
            </li> */}
            {/* <li>
              <Link to="/orders" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded transition duration-200">
                Orders Tracking
              </Link>
            </li> */}
            <li>
              <Link to="/support" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded transition duration-200">
                Customer Support
              </Link>
            </li>
            <li>
              <Link to="/Admin/login" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded transition duration-200">
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;