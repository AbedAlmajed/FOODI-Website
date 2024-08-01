import React from 'react';

const StatCard = ({ title, value, change, bgColor }) => {
  return (
    <div className={`p-4 rounded-lg shadow-md ${bgColor}`}>
      <div className="text-sm text-gray-700">{title}</div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-xs text-gray-600">{change}</div>
    </div>
  );
};

export default StatCard;
