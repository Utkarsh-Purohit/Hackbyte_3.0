import React from 'react';
import FileUpload from '../components/FileUpload';
import ReportCard from '../components/ReportCard';
import ProgressChart from '../components/ProgressChart';
import ReminderCard from '../components/ReminderCard';

const PatientDashboard = () => {
  // Sample data
  const recentReports = [
    {
      id: 1,
      title: 'Blood Test Results',
      date: '2023-05-15',
      status: 'Analyzed',
      insights: 'Normal range for most markers. Slightly elevated cholesterol noted.'
    },
    {
      id: 2,
      title: 'MRI Scan',
      date: '2023-04-28',
      status: 'Pending Review',
      insights: 'No abnormalities detected in preliminary analysis.'
    }
  ];

  const reminders = [
    { id: 1, medication: 'Metformin', time: '08:00 AM', dosage: '500mg' },
    { id: 2, medication: 'Vitamin D', time: '12:00 PM', dosage: '1000IU' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column */}
        <div className="w-full md:w-2/3 space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Upload Medical Reports</h2>
            <FileUpload />
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Reports</h2>
            <div className="space-y-4">
              {recentReports.map(report => (
                <ReportCard key={report.id} report={report} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/3 space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Health Progress</h2>
            <ProgressChart />
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Upcoming Medications</h2>
            <div className="space-y-3">
              {reminders.map(reminder => (
                <ReminderCard key={reminder.id} reminder={reminder} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;