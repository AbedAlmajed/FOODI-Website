import React from 'react';

const Chart = ({ title, type, className }) => {
  return (
    <div className={`bg-white p-4 rounded-lg shadow-md ${className}`}>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="h-64 bg-gray-200 rounded flex items-center justify-center">
        <p className="text-gray-500">Chart placeholder ({type})</p>
      </div>
    </div>
  );
};

export default Chart;
