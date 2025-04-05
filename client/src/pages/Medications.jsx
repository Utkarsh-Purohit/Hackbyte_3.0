import React, { useState, useEffect } from 'react';
import ReminderCard from '../components/ReminderCard';

const Medications = () => {
  const [medications, setMedications] = useState(() => {
    const saved = localStorage.getItem('medications');
    return saved ? JSON.parse(saved) : [
      { id: 1, name: 'Metformin', dosage: '500mg', frequency: 'Twice daily', purpose: 'Type 2 Diabetes', lastTaken: 'Today, 08:15 AM' },
      { id: 2, name: 'Atorvastatin', dosage: '20mg', frequency: 'Once daily at bedtime', purpose: 'Cholesterol', lastTaken: 'Yesterday, 10:30 PM' },
      { id: 3, name: 'Vitamin D3', dosage: '2000 IU', frequency: 'Once daily with breakfast', purpose: 'Supplement', lastTaken: 'Today, 08:10 AM' }
    ];
  });

  const [reminders, setReminders] = useState(() => {
    const saved = localStorage.getItem('reminders');
    return saved ? JSON.parse(saved) : [
      { id: 1, medication: 'Metformin', time: '08:00 AM', dosage: '500mg' },
      { id: 2, medication: 'Vitamin D', time: '12:00 PM', dosage: '1000IU' },
      { id: 3, medication: 'Atorvastatin', time: '10:00 PM', dosage: '20mg' }
    ];
  });

  const [showMedForm, setShowMedForm] = useState(false);
  const [showReminderForm, setShowReminderForm] = useState(false);
  const [newMed, setNewMed] = useState({ name: '', dosage: '', frequency: '', purpose: '' });
  const [newReminder, setNewReminder] = useState({ medication: '', time: '', dosage: '' });

  useEffect(() => {
    localStorage.setItem('medications', JSON.stringify(medications));
  }, [medications]);

  useEffect(() => {
    localStorage.setItem('reminders', JSON.stringify(reminders));
  }, [reminders]);

  const handleAddMedication = () => {
    if (!newMed.name || !newMed.dosage) return;
    const med = { ...newMed, id: Date.now(), lastTaken: 'Not yet taken' };
    setMedications(prev => [...prev, med]);
    setNewMed({ name: '', dosage: '', frequency: '', purpose: '' });
    setShowMedForm(false);
  };

  const handleAddReminder = () => {
    if (!newReminder.medication || !newReminder.time) return;
    const rem = { ...newReminder, id: Date.now() };
    setReminders(prev => [...prev, rem]);
    setNewReminder({ medication: '', time: '', dosage: '' });
    setShowReminderForm(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Medications</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Medications Section */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-700">Your Medications</h2>
            <button
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
              onClick={() => setShowMedForm(!showMedForm)}
            >
              + Add Medication
            </button>
          </div>

          {showMedForm && (
            <div className="mb-4 space-y-2">
              <input
                type="text"
                placeholder="Name"
                value={newMed.name}
                onChange={(e) => setNewMed({ ...newMed, name: e.target.value })}
                className="border p-2 w-full"
              />
              <input
                type="text"
                placeholder="Dosage"
                value={newMed.dosage}
                onChange={(e) => setNewMed({ ...newMed, dosage: e.target.value })}
                className="border p-2 w-full"
              />
              <input
                type="text"
                placeholder="Frequency"
                value={newMed.frequency}
                onChange={(e) => setNewMed({ ...newMed, frequency: e.target.value })}
                className="border p-2 w-full"
              />
              <input
                type="text"
                placeholder="Purpose"
                value={newMed.purpose}
                onChange={(e) => setNewMed({ ...newMed, purpose: e.target.value })}
                className="border p-2 w-full"
              />
              <button
                onClick={handleAddMedication}
                className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Add Medication
              </button>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Medication</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Dosage</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Frequency</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Purpose</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Taken</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {medications.map((med) => (
                  <tr key={med.id}>
                    <td className="px-6 py-4 text-sm text-gray-900">{med.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{med.dosage}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{med.frequency}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{med.purpose}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{med.lastTaken}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Reminders Section */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Medication Reminders</h2>

          <div className="space-y-3">
            {reminders.map((reminder) => (
              <ReminderCard key={reminder.id} reminder={reminder} />
            ))}
          </div>

          <div className="mt-6">
            <button
              className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
              onClick={() => setShowReminderForm(!showReminderForm)}
            >
              + Add New Reminder
            </button>
          </div>

          {showReminderForm && (
            <div className="mt-4 space-y-2">
              <input
                type="text"
                placeholder="Medication"
                value={newReminder.medication}
                onChange={(e) => setNewReminder({ ...newReminder, medication: e.target.value })}
                className="border p-2 w-full"
              />
              <input
                type="text"
                placeholder="Time"
                value={newReminder.time}
                onChange={(e) => setNewReminder({ ...newReminder, time: e.target.value })}
                className="border p-2 w-full"
              />
              <input
                type="text"
                placeholder="Dosage"
                value={newReminder.dosage}
                onChange={(e) => setNewReminder({ ...newReminder, dosage: e.target.value })}
                className="border p-2 w-full"
              />
              <button
                onClick={handleAddReminder}
                className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Add Reminder
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Medications;
