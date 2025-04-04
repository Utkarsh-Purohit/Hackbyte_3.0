import React from 'react';
import ReportCard from '../components/ReportCard';

const Reports = () => {
  // Sample data
  const allReports = [
    {
      id: 1,
      title: 'Blood Test Results',
      date: '2023-05-15',
      status: 'Reviewed',
      insights: 'Normal range for most markers. Slightly elevated cholesterol noted. Doctor recommendation: Dietary changes and follow-up in 3 months.'
    },
    {
      id: 2,
      title: 'MRI Scan',
      date: '2023-04-28',
      status: 'Reviewed',
      insights: 'No abnormalities detected. All structures appear normal.'
    },
    {
      id: 3,
      title: 'Urinalysis',
      date: '2023-03-10',
      status: 'Reviewed',
      insights: 'Normal results. No signs of infection or other abnormalities.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Medical Reports</h1>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300">
            + New Upload
          </button>
        </div>

        <div className="mb-4">
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-md font-medium">
              All Reports
            </button>
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md font-medium">
              Pending
            </button>
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md font-medium">
              Reviewed
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {allReports.map(report => (
            <ReportCard key={report.id} report={report} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;