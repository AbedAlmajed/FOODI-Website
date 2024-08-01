import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

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
    name: "Escalope de Veau",
    recipe: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
    image: "/recipes/img1.png",
    category: "popular",
    price: 14.5
  },
  {
    _id: "642c155b2c4774f05c36ee88",
    name: "Escalope de Veau",
    recipe: "Pan roasted haddock fillet wrapped in smoked French bacon with pea purée and tomato and chive vinaigrette",
    image: "/recipes/img1.png",
    category: "dessert",
    price: 12.5
  },
  {
    _id: "642c155b2c4774f05c36ee7a",
    name: "Roast Duck Breast",
    recipe: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
    image: "/recipes/img2.png",
    category: "popular",
    price: 14.5
  },
];

const itemsPerPage = 3; // Items per page

const Card = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [likedItems, setLikedItems] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter items based on the search query and selected category
  const filteredItems = items.filter(item =>
    (item.name.toLowerCase().includes(searchQuery.toLowerCase()) || searchQuery === '') &&
    (selectedCategory === 'all' || item.category === selectedCategory)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  // Create an array of page numbers for pagination
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const handleHeartClick = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page when changing category
  };

  // Get unique categories for the filter options
  const categories = Array.from(new Set(items.map(item => item.category)));
  const allCategories = ['all', ...categories]; // Include 'all' as an option

  return (
    <div className="p-4" data-aos="fade-up">
      {/* Filter and Search Inputs Side by Side */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
        {/* Category Filter */}
        <div className="flex items-center gap-2">
          <label htmlFor="category-filter" className="font-semibold text-gray-700">Filter by Category:</label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="input input-bordered bg-white"
          >
            {allCategories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Search Input */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search by Title"
            value={searchQuery}
            onChange={handleSearchChange}
            className="input input-bordered bg-white"
          />
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentItems.map((item) => (
          <div key={item._id} className="card bg-white shadow-lg rounded-lg overflow-hidden relative border border-gray-200">
            <div className="relative">
              <figure>
                <img src={item.image} alt={item.name} className="hover:scale-105 transition-all duration-300 md:h-72" />
              </figure>
              <div
                className={`absolute top-2 right-2 p-2 rounded-full ${
                  likedItems[item._id] ? "text-red" : "text-black"
                }`}
                onClick={() => handleHeartClick(item._id)}
              >
                <FaHeart className="w-6 h-6 cursor-pointer" />
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.name}</h3>
              <p className="text-gray mb-2">{item.recipe}</p>
              <p className="text-green-600 font-bold mb-4">${item.price.toFixed(2)}</p>
              <button className="bg-green text-white px-4 py-2 rounded-lg hover:bg-black transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center mt-4">
        <div className="flex space-x-2">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={`px-4 py-2 mx-2 rounded-md ${
                currentPage === number
                  ? "bg-green text-white"
                  : "bg-gray-200"
              }`}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
