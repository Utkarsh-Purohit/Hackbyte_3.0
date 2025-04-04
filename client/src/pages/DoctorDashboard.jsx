import React from 'react';
import DoctorReportCard from '../components/DoctorReportCard';

const DoctorDashboard = () => {
  // Sample data
  const pendingReports = [
    {
      id: 1,
      patientName: 'John Doe',
      reportTitle: 'Blood Test Results',
      date: '2023-05-15',
      aiInsights: 'Normal range for most markers. Slightly elevated cholesterol noted. Suggested prescription: Atorvastatin 10mg daily.',
      aiConfidence: '85%'
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      reportTitle: 'CT Scan - Abdomen',
      date: '2023-05-10',
      aiInsights: 'No abnormalities detected in liver, kidneys, or pancreas. Small gallstones present but asymptomatic.',
      aiConfidence: '92%'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Doctor Dashboard</h1>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Reports Needing Review</h2>
          <div className="space-y-4">
            {pendingReports.map(report => (
              <DoctorReportCard key={report.id} report={report} />
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <h3 className="text-lg font-medium text-blue-800 mb-2">Quick Actions</h3>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
              View All Patients
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300">
              Create New Prescription
            </button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300">
              AI Analysis Queue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;