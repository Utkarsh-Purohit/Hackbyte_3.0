import React from 'react';

const ReminderCard = ({ reminder }) => {
  return (
    <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-300">
      <div className="flex items-center">
        <div className="p-2 bg-indigo-100 rounded-lg mr-3">
          <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <div>
          <h4 className="font-medium text-gray-800">{reminder.medication}</h4>
          <p className="text-sm text-gray-500">{reminder.dosage}</p>
        </div>
      </div>
      <div className="text-right">
        <span className="block font-medium text-gray-800">{reminder.time}</span>
        <button className="text-xs text-indigo-600 hover:text-indigo-800">
          Snooze
        </button>
      </div>
    </div>
  );
};

export default ReminderCard;