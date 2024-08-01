import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaUserCircle } from 'react-icons/fa'; // Importing a user icon

// Sample items array
const items = [
  {
    _id: "642c155b2c4774f05c36eeaa",
    name: "Haddock",
    recipe: "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.",
    image: "/recipes/img1.png",
    category: "salad",
    price: 14.7
  },
  {
    _id: "642c155b2c4774f05c36eeb9",
    name: "Haddock",
    recipe: "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.",
    image: "/recipes/img2.png",
    category: "drinks",
    price: 14.7
  },
  {
    _id: "642c155b2c4774f05c36ee7c",
    name: "Haddock",
    recipe: "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.",
    image: "/recipes/img2.png",
    category: "drinks",
    price: 14.7
  },
  // Add more items to make up to at least 6 or more
];

export default function Profile() {
  return (
    <div className="p-4 md:p-8">
      <Navbar />

      <div className="flex flex-col justify-center items-center min-h-screen space-y-8">
        {/* Profile Edit Section */}
        <div className="w-full max-w-md bg-white shadow-md rounded-md p-6 mt-20">
          <h3 className="text-lg md:text-xl font-semibold mb-4">Edit Profile</h3>

          {/* Photo Upload */}
          <div className="flex justify-center mb-4">
            <label htmlFor="profilePhoto" className="flex flex-col items-center cursor-pointer">
              <FaUserCircle size={100} className="text-green" />
              <input
                type="file"
                id="profilePhoto"
                className="hidden"
              />
              <span className="text-sm text-gray-600 mt-2">Upload Photo</span>
            </label>
          </div>

          {/* Profile Edit Form */}
          <form className="space-y-4">
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full pl-4 py-2 border border-gray-300 rounded-md bg-white"
                placeholder="Your Name"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green text-white py-2 rounded-md hover:bg-black"
            >
              Update
            </button>
          </form>
        </div>

        {/* Favorite Food Catalog */}
        <div className="w-full max-w-6xl bg-white shadow-md rounded-md p-6">
           <h2 className='text-center text-2xl font-bold mb-6'>My Faviorate Food</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {items.map((item) => (
    <div key={item._id} className="card bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
    <figure>
    <img src={item.image} alt="Shoes" className="hover:scale-105 transition-all duration-300 md:h-72" />
  </figure>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.name}</h3>
        <p className="text-gray-700 mb-2">{item.recipe}</p>
        <p className="text-green-600 font-bold mb-4">${item.price.toFixed(2)}</p>
        <button className="bg-green text-white px-4 py-2 rounded-lg hover:bg-black transition-colors duration-300">
                Add to Cart
              </button>
      </div>
    </div>
  ))}
</div>
        </div>

        {/* Custom Food Catalog */}
        <div className="w-full max-w-6xl bg-white shadow-md rounded-md p-6">
        <h2 className='text-center text-2xl font-bold mb-6'>My Custom Food</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item._id} className="card bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
          <figure>
          <img src={item.image} alt="Shoes" className="hover:scale-105 transition-all duration-300 md:h-72" />
        </figure>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.name}</h3>
              <p className="text-gray-700 mb-2">{item.recipe}</p>
              <p className="text-green-600 font-bold mb-4">${item.price.toFixed(2)}</p>
              <button className="bg-green text-white px-4 py-2 rounded-lg hover:bg-black transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
