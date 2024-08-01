import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaTrash } from 'react-icons/fa'; // Import delete icon
import { Link } from 'react-router-dom';
// Sample data for cart items
const cartItems  = [
  {
    id: 1,
    image: "/recipes/img1.png",
    itemName: "Chicken Breast",
    quantity: 2,
    price: 15.99
  },
  {
    id: 2,
    image: "/recipes/img1.png",
    itemName: "Pizza Slice",
    quantity: 1,
    price: 12.99
  },
  {
    id: 3,
    image: "/recipes/img1.png",
    itemName: "Salad Bowl",
    quantity: 3,
    price: 9.99
  }
];

export default function Cart() {

  return (
    <div className="p-4 md:p-8">
      <Navbar />
      
      {/* Menu Banner */}
      <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-[#FAFAFA] to-[#FCFCFC]">
        <div className="py-24 md:py-48 flex flex-col items-center justify-center">
          <div className="text-center px-4 space-y-4 md:space-y-7">
            <h2 className="text-3xl md:text-5xl font-bold leading-snug">
              Items Added to the <span className="text-green">Food</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mb-8 md:mb-12 px-4 md:px-16">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-green">
            <tr>
              <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.</th>
              <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Food</th>
              <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Name</th>
              <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
              <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cartItems.map((item, index) => (
              <tr key={item.id}>
                <td className="px-4 py-2 text-sm text-gray-500">{index + 1}</td>
                <td className="px-4 py-2 text-sm text-gray-500 flex items-center space-x-2">
                  <img src={item.image} alt={item.itemName} className="w-8 h-8 md:w-12 md:h-12 object-cover rounded" />
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">{item.itemName}</td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <button
                      className="px-1 py-1 bg-gray-300 rounded text-gray-700 hover:bg-gray-400 text-sm md:text-base"
                    >
                      -
                    </button>
                    <span className="text-sm text-gray-700">{item.quantity}</span>
                    <button
                      className="px-1 py-1 bg-gray-300 rounded text-gray-700 hover:bg-gray-400 text-sm md:text-base"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">${item.price.toFixed(2)}</td>
                <td className="px-4 py-2 text-sm font-medium">
                  <button className="text-red">
                    <FaTrash className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Customer and Shopping Details */}
      <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-12 px-4 md:px-16">
        {/* Customer Details */}
        <div className="flex-1 mb-8 md:mb-0 md:mr-8">
          <h3 className="text-lg md:text-xl font-semibold mb-4">Customer Details</h3>
          <div className="space-y-2">
            <p><strong className='text-green'>Name:</strong> Abedalmajeed Alajarmah</p>
            <p><strong className='text-green'>Email:</strong> abedalmajedalajarmah@gmail.com</p>
          </div>
        </div>

        {/* Shopping Details */}
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-semibold mb-4">Shopping Details</h3>
          <div className="space-y-2">
            <p><strong className='text-green'>Total Items:</strong>3</p>
            <p><strong className='text-green'>Total Price:</strong> $50</p>
          </div>
       <Link to="/Menu/Cart/payment">   <button
            className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded bg-green hover:bg-black"
          >
            Proceed to Checkout
          </button></Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
