// import React, { useState } from 'react';
// import Sidebar from './Sidebar'; // Make sure you have a Sidebar component

// const UploadMenu = () => {
//   const [recipeName, setRecipeName] = useState('');
//   const [category, setCategory] = useState('');
//   const [price, setPrice] = useState('');
//   const [recipeDetails, setRecipeDetails] = useState('');
//   const [file, setFile] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log({ recipeName, category, price, recipeDetails, file });
//   };

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen">
//       <Sidebar />
//       <div className="flex-grow p-6 md:ml-64">
//         <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
//           <h1 className="text-3xl font-bold mb-6">
//             Upload A New <span className="text-green">Menu Item</span>
//           </h1>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="recipeName" className="block text-sm font-medium text-gray-700 mb-1">
//                 Recipe Name*
//               </label>
//               <input
//                 type="text"
//                 id="recipeName"
//                 value={recipeName}
//                 onChange={(e) => setRecipeName(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green bg-white"
//                 placeholder="Recipe Name"
//                 required
//               />
//             </div>
//             <div className="flex mb-4 space-x-4">
//               <div className="w-1/2">
//                 <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
//                   Category*
//                 </label>
//                 <select
//                   id="category"
//                   value={category}
//                   onChange={(e) => setCategory(e.target.value)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green bg-white"
//                   required
//                 >
//                   <option value="">Select a category</option>
//                   <option value="appetizer">Appetizer</option>
//                   <option value="main">Main Course</option>
//                   <option value="dessert">Dessert</option>
//                 </select>
//               </div>
//               <div className="w-1/2">
//                 <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
//                   Price*
//                 </label>
//                 <input
//                   type="text"
//                   id="price"
//                   value={price}
//                   onChange={(e) => setPrice(e.target.value)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green bg-white"
//                   placeholder="Price"
//                   required
//                 />
//               </div>
//             </div>
//             <div className="mb-4">
//               <label htmlFor="recipeDetails" className="block text-sm font-medium text-gray-700 mb-1">
//                 Recipe Details
//               </label>
//               <textarea
//                 id="recipeDetails"
//                 value={recipeDetails}
//                 onChange={(e) => setRecipeDetails(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green bg-white"
//                 rows="4"
//                 placeholder="Recipe Details"
//               ></textarea>
//             </div>
//             <div className="mb-6">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Upload Image
//               </label>
//               <div className="flex items-center">
//                 <label htmlFor="fileUpload" className="cursor-pointer bg-green text-white px-4 py-2 rounded-md hover:bg-black">
//                   CHOOSE FILE
//                 </label>
//                 <input
//                   type="file"
//                   id="fileUpload"
//                   onChange={(e) => setFile(e.target.files[0])}
//                   className="hidden"
//                 />
//                 <span className="ml-3 text-sm text-gray-500">
//                   {file ? file.name : 'No file chosen'}
//                 </span>
//               </div>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-black bg-green focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2"
//             >
//               Add Item
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UploadMenu;
/////////////////////////////////////////////

import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Make sure you have a Sidebar component

const UploadMenu = () => {
  const [recipeName, setRecipeName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [recipeDetails, setRecipeDetails] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ recipeName, category, price, recipeDetails, file });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-grow p-6 md:ml-5">
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">
            Upload A New <span className="text-green">Menu Item</span>
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="recipeName" className="block text-sm font-medium text-gray-700 mb-1">
                Recipe Name*
              </label>
              <input
                type="text"
                id="recipeName"
                value={recipeName}
                onChange={(e) => setRecipeName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green bg-white"
                placeholder="Recipe Name"
                required
              />
            </div>
            <div className="flex mb-4 space-x-4">
              <div className="w-1/2">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category*
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green bg-white"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="appetizer">Appetizer</option>
                  <option value="main">Main Course</option>
                  <option value="dessert">Dessert</option>
                </select>
              </div>
              <div className="w-1/2">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                  Price*
                </label>
                <input
                  type="text"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green bg-white"
                  placeholder="Price"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="recipeDetails" className="block text-sm font-medium text-gray-700 mb-1">
                Recipe Details
              </label>
              <textarea
                id="recipeDetails"
                value={recipeDetails}
                onChange={(e) => setRecipeDetails(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green bg-white"
                rows="4"
                placeholder="Recipe Details"
              ></textarea>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Image
              </label>
              <div className="flex items-center">
                <label htmlFor="fileUpload" className="cursor-pointer bg-green text-white px-4 py-2 rounded-md hover:bg-black">
                  CHOOSE FILE
                </label>
                <input
                  type="file"
                  id="fileUpload"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="hidden"
                />
                <span className="ml-3 text-sm text-gray-500">
                  {file ? file.name : 'No file chosen'}
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-black bg-green focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2"
            >
              Add Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadMenu;
