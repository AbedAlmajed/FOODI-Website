import React, { useState } from 'react';
import { Trash, Reply } from 'lucide-react';
import Sidebar from './Sidebar';

const users = [
  { id: 1, name: 'abedalmajeed', email: 'abedalmajeed@gmail.com', message: 'Issue with login' },
  { id: 2, name: 'abedalmajeed', email: 'abedalmajeed@gmail.com', message: 'Password reset' },
  { id: 3, name: 'abedalmajeed', email: 'abedalmajeed@gmail.com', message: 'Billing query' },
  { id: 4, name: 'abedalmajeed', email: 'abedalmajeed@gmail.com', message: 'Account locked' },
  { id: 5, name: 'abedalmajeed', email: 'abedalmajeed@gmail.com', message: 'Technical support' },
  { id: 6, name: 'abedalmajeed', email: 'abedalmajeed@gmail.com', message: 'Feature request' },
  { id: 7, name: 'abedalmajeed', email: 'abedalmajeed@gmail.com', message: 'Feedback' },
  { id: 8, name: 'abedalmajeed', email: 'abedalmajeed@gmail.com', message: 'Other inquiries' },
  { id: 9, name: 'abedalmajeed', email: 'abedalmajeed@gmail.com', message: 'Question about service' },
];

const ITEMS_PER_PAGE = 5;

const CustomerSupport = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentUsers = users.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-grow p-6 md:ml-64">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">User Inquiry Messages</h2>
          <p className="text-gray-600">Total Users: {users.length}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-green text-white">
              <tr>
                <th className="py-3 px-5 text-left border-b">#</th>
                <th className="py-3 px-5 text-left border-b">Name</th>
                <th className="py-3 px-5 text-left border-b">Email</th>
                <th className="py-3 px-5 text-left border-b">Message</th>
                <th className="py-3 px-5 text-left border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user, index) => (
                <tr key={user.id} className={user.id % 2 === 0 ? 'bg-gray-100' : ''}>
                  <td className="py-3 px-5 border-b">{startIndex + index + 1}</td>
                  <td className="py-3 px-5 border-b">{user.name}</td>
                  <td className="py-3 px-5 border-b">{user.email}</td>
                  <td className="py-3 px-5 border-b">{user.message}</td>
                  <td className="py-3 px-5 border-b flex space-x-2">
                    <button className="bg-green text-white px-3 py-1 rounded">
                      <Reply size={16} />
                    </button>
                    <button className="bg-red text-white px-3 py-1 rounded">
                      <Trash size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-green text-white rounded hover:bg-black "
            >
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-green text-white rounded hover:bg-black "
            >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
