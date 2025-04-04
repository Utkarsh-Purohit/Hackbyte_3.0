import React from 'react';
import MoodTracker from '../components/MoodTracker';
import ChatBot from '../components/ChatBot';

const MentalHealth = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Mental Health</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Mood Tracker */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Mood Tracker</h2>
          <MoodTracker />
        </div>

        {/* AI Chatbot */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Emotional Support Companion</h2>
          <ChatBot />
        </div>
      </div>

      {/* Resources Section */}
      <div className="mt-8 bg-blue-50 rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Mental Health Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <h3 className="font-medium text-lg mb-2">Meditation Guides</h3>
            <p className="text-gray-600">Guided sessions for stress relief and mindfulness.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <h3 className="font-medium text-lg mb-2">Therapist Directory</h3>
            <p className="text-gray-600">Find licensed professionals in your area.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300">
            <h3 className="font-medium text-lg mb-2">Crisis Support</h3>
            <p className="text-gray-600">Immediate help when you need it most.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalHealth;