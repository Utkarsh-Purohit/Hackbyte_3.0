import React from 'react';
import ReminderCard from '../components/ReminderCard';

const Medications = () => {
  // Sample data
  const medications = [
    { id: 1, name: 'Metformin', dosage: '500mg', frequency: 'Twice daily', purpose: 'Type 2 Diabetes', lastTaken: 'Today, 08:15 AM' },
    { id: 2, name: 'Atorvastatin', dosage: '20mg', frequency: 'Once daily at bedtime', purpose: 'Cholesterol', lastTaken: 'Yesterday, 10:30 PM' },
    { id: 3, name: 'Vitamin D3', dosage: '2000 IU', frequency: 'Once daily with breakfast', purpose: 'Supplement', lastTaken: 'Today, 08:10 AM' }
  ];

  const reminders = [
    { id: 1, medication: 'Metformin', time: '08:00 AM', dosage: '500mg' },
    { id: 2, medication: 'Vitamin D', time: '12:00 PM', dosage: '1000IU' },
    { id: 3, medication: 'Atorvastatin', time: '10:00 PM', dosage: '20mg' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Medications</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Current Medications */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-700">Your Medications</h2>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300">
              + Add Medication
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Medication
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Dosage
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Frequency
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Purpose
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Taken
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {medications.map(med => (
                  <tr key={med.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {med.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {med.dosage}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {med.frequency}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {med.purpose}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {med.lastTaken}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Reminders */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Medication Reminders</h2>
          <div className="space-y-3">
            {reminders.map(reminder => (
              <ReminderCard key={reminder.id} reminder={reminder} />
            ))}
          </div>
          
          <div className="mt-6">
            <button className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300">
              + Add New Reminder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medications;