import React, { useState } from 'react';

const DoctorReportCard = ({ report }) => {
  const [notes, setNotes] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('pending');
  const [prescription, setPrescription] = useState('');

  const handleVerify = (status) => {
    setVerificationStatus(status);
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition duration-300">
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">{report.reportTitle}</h3>
          <span className="text-sm text-gray-500">Patient: {report.patientName}</span>
        </div>
        <p className="text-sm text-gray-500 mt-1">Date: {report.date}</p>
      </div>
      
      <div className="p-4">
        <div className="mb-4">
          <h4 className="font-medium text-gray-700 mb-2">AI Analysis (Confidence: {report.aiConfidence})</h4>
          <p className="text-sm text-gray-700 bg-blue-50 p-3 rounded-md">{report.aiInsights}</p>
        </div>
        
        <div className="mb-4">
          <label htmlFor="doctor-notes" className="block text-sm font-medium text-gray-700 mb-1">
            Your Notes
          </label>
          <textarea
            id="doctor-notes"
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add your clinical observations..."
          ></textarea>
        </div>
        
        <div className="mb-4">
          <label htmlFor="prescription" className="block text-sm font-medium text-gray-700 mb-1">
            Prescription
          </label>
          <textarea
            id="prescription"
            rows="2"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={prescription}
            onChange={(e) => setPrescription(e.target.value)}
            placeholder="Enter prescription details..."
          ></textarea>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <button
              onClick={() => handleVerify('verified')}
              className={`px-3 py-1 rounded-md text-sm font-medium ${verificationStatus === 'verified' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800 hover:bg-green-200'} transition duration-300`}
            >
              Verify
            </button>
            <button
              onClick={() => handleVerify('modified')}
              className={`px-3 py-1 rounded-md text-sm font-medium ${verificationStatus === 'modified' ? 'bg-yellow-600 text-white' : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'} transition duration-300`}
            >
              Modify
            </button>
            <button
              onClick={() => handleVerify('rejected')}
              className={`px-3 py-1 rounded-md text-sm font-medium ${verificationStatus === 'rejected' ? 'bg-red-600 text-white' : 'bg-red-100 text-red-800 hover:bg-red-200'} transition duration-300`}
            >
              Reject
            </button>
          </div>
          
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300">
            Save & Send to Patient
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorReportCard;