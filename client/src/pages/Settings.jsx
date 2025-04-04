import React from 'react';

const Settings = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Settings</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Settings */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Profile Information</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    defaultValue="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    defaultValue="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  defaultValue="john.doe@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  defaultValue="+1 (555) 123-4567"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <input 
                  type="date" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  defaultValue="1985-06-15"
                />
              </div>
              
              <div className="pt-4">
                <button 
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
          
          {/* Account Settings */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Account Settings</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Notification Preferences</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input id="med-reminders" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="med-reminders" className="ml-2 block text-sm text-gray-700">Medication Reminders</label>
                  </div>
                  <div className="flex items-center">
                    <input id="report-updates" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="report-updates" className="ml-2 block text-sm text-gray-700">Report Updates</label>
                  </div>
                  <div className="flex items-center">
                    <input id="appointment-alerts" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="appointment-alerts" className="ml-2 block text-sm text-gray-700">Appointment Alerts</label>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Change Password</h3>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition duration-300">
                  Update Password
                </button>
              </div>
              
              <div className="pt-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Danger Zone</h3>
                <button className="px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition duration-300">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;