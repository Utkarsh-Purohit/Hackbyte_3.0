import React from 'react';

const ReportCard = ({ report }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'analyzed':
        return 'bg-green-100 text-green-800';
      case 'pending review':
        return 'bg-yellow-100 text-yellow-800';
      case 'reviewed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition duration-300">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{report.title}</h3>
            <p className="text-sm text-gray-500">{report.date}</p>
          </div>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(report.status)}`}>
            {report.status}
          </span>
        </div>
        
        <div className="mt-3">
          <p className="text-sm text-gray-700">{report.insights}</p>
        </div>
        
        <div className="mt-4 flex space-x-3">
          <button className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition duration-300">
            View Details
          </button>
          <button className="px-3 py-1 bg-white border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 transition duration-300">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;