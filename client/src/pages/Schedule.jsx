import React from 'react';

const appointments = [
  {
    id: 1,
    patientName: 'Parth',
    time: '10:00 AM',
    date: '2025-04-07',
    reason: 'Follow-up consultation',
  },
  {
    id: 2,
    patientName: 'Amit',
    time: '11:30 AM',
    date: '2025-04-07',
    reason: 'New patient intake',
  },
  {
    id: 3,
    patientName: 'Rohit',
    time: '2:00 PM',
    date: '2025-04-07',
    reason: 'Blood test review',
  },
];

const Schedule = () => {
  const today = new Date().toLocaleDateString();

  return (
    <div className="max-w-4xl mx-auto p-6 mt-8 bg-white shadow-xl rounded-xl">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">Schedule</h1>
      <p className="text-gray-600 mb-6">Date: <strong>{today}</strong></p>

      <div className="space-y-4">
        {appointments.map(appt => (
          <div key={appt.id} className="border-l-4 border-indigo-600 bg-indigo-50 p-4 rounded-md shadow-sm">
            <div className="flex justify-between items-center mb-1">
              <h2 className="text-lg font-semibold">{appt.patientName}</h2>
              <span className="text-sm text-gray-600">{appt.time}</span>
            </div>
            <p className="text-gray-700 text-sm">Reason: {appt.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
