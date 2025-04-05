// Same imports as before
import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, AreaChart, Area, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';

const TABS = ['Blood Sugar', 'Blood Pressure', 'Heart Rate', 'Oxygen Level', 'Temperature', 'BMI Trend', 'Sleep', 'Hydration', 'Stress'];
const VIEWS = ['Day', 'Month', 'Year'];
const TIME_OPTIONS = ['Morning', 'Noon', 'Night'];

const generateDummyData = (tab, view) => {
  if (tab === 'Blood Sugar') {
    if (view === 'Day') {
      return [
        { day: 'Mon', Morning: 90, Noon: 110, Night: 100 },
        { day: 'Tue', Morning: 95, Noon: 115, Night: 102 },
        { day: 'Wed', Morning: 92, Noon: 112, Night: 98 },
        { day: 'Thu', Morning: 91, Noon: 108, Night: 96 },
        { day: 'Fri', Morning: 94, Noon: 111, Night: 99 },
        { day: 'Sat', Morning: 93, Noon: 109, Night: 97 },
        { day: 'Sun', Morning: 96, Noon: 114, Night: 101 },
      ];
    } else if (view === 'Month') {
      return [
        { label: 'Jan', Avg: 100 },
        { label: 'Feb', Avg: 105 },
        { label: 'Mar', Avg: 98 },
        { label: 'Apr', Avg: 97 },
        { label: 'May', Avg: 102 },
        { label: 'Jun', Avg: 101 },
        { label: 'Jul', Avg: 99 },
        { label: 'Aug', Avg: 100 },
        { label: 'Sep', Avg: 103 },
        { label: 'Oct', Avg: 104 },
        { label: 'Nov', Avg: 106 },
        { label: 'Dec', Avg: 102 },
      ];
    } else {
      return [
        { label: '2020', Avg: 101 },
        { label: '2021', Avg: 102 },
        { label: '2022', Avg: 100 },
        { label: '2023', Avg: 103 },
        { label: '2024', Avg: 99 },
      ];
    }
  }

  if (tab === 'Blood Pressure') {
    return [
      { label: 'Jan', systolic: 120, diastolic: 80 },
      { label: 'Feb', systolic: 122, diastolic: 82 },
      { label: 'Mar', systolic: 119, diastolic: 79 },
      { label: 'Apr', systolic: 121, diastolic: 81 },
      { label: 'May', systolic: 124, diastolic: 83 },
    ];
  }

  if (tab === 'Heart Rate') {
    return [
      { label: '6 AM', rate: 65 },
      { label: '8 AM', rate: 72 },
      { label: '12 PM', rate: 78 },
      { label: '4 PM', rate: 75 },
      { label: '8 PM', rate: 70 },
    ];
  }

  if (tab === 'Oxygen Level') {
    return [
      { label: 'Mon', level: 98 },
      { label: 'Tue', level: 97 },
      { label: 'Wed', level: 96 },
      { label: 'Thu', level: 99 },
      { label: 'Fri', level: 97 },
    ];
  }

  if (tab === 'Temperature') {
    return [
      { label: 'Mon', temp: 98.6 },
      { label: 'Tue', temp: 99.1 },
      { label: 'Wed', temp: 98.4 },
      { label: 'Thu', temp: 98.9 },
      { label: 'Fri', temp: 98.7 },
    ];
  }

  if (tab === 'BMI Trend') {
    return [
      { label: 'Jan', BMI: 23.1 },
      { label: 'Feb', BMI: 23.0 },
      { label: 'Mar', BMI: 22.9 },
      { label: 'Apr', BMI: 23.2 },
    ];
  }

  if (tab === 'Sleep') {
    return [
      { quality: 'Deep Sleep', value: 40 },
      { quality: 'Light Sleep', value: 35 },
      { quality: 'REM', value: 20 },
      { quality: 'Awake', value: 5 },
    ];
  }

  if (tab === 'Hydration') {
    return [
      { label: 'Mon', intake: 2.5 },
      { label: 'Tue', intake: 2.8 },
      { label: 'Wed', intake: 2.3 },
      { label: 'Thu', intake: 2.6 },
    ];
  }

  if (tab === 'Stress') {
    return [
      { label: 'Mon', level: 5 },
      { label: 'Tue', level: 6 },
      { label: 'Wed', level: 4 },
      { label: 'Thu', level: 7 },
    ];
  }

  return [];
};

const Charts = () => {
  const [activeTab, setActiveTab] = useState('Blood Sugar');
  const [dataView, setDataView] = useState('Day');
  const [manualLabel, setManualLabel] = useState('');
  const [manualValue, setManualValue] = useState('');
  const [timeOfDay, setTimeOfDay] = useState('Morning');
  const [chartData, setChartData] = useState(generateDummyData('Blood Sugar', 'Day'));

  const updateChartData = (tab, view) => {
    const newData = generateDummyData(tab, view);
    setChartData(newData);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    updateChartData(tab, dataView);
  };

  const handleViewChange = (view) => {
    setDataView(view);
    updateChartData(activeTab, view);
  };

  const handleManualAdd = () => {
    if (!manualLabel || !manualValue) return;

    let newEntry;
    if (dataView === 'Day') {
      newEntry = { day: manualLabel, [timeOfDay]: parseFloat(manualValue) };
    } else {
      newEntry = { label: manualLabel, Avg: parseFloat(manualValue) };
    }

    setChartData(prev => [...prev, newEntry]);
    setManualLabel('');
    setManualValue('');
  };

  return (
    <div className="min-h-screen px-8 py-10 bg-gray-50 text-gray-800">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-indigo-700 mb-2">Health Monitoring Dashboard</h1>
          <p className="text-md text-gray-500">Track & visualize all your health metrics beautifully</p>
        </div>

        <div className="flex flex-wrap justify-between mb-8">
          <div className="flex gap-2 flex-wrap">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-4 py-1.5 rounded-full font-medium ${
                  activeTab === tab ? 'bg-indigo-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <select
            className="border px-3 py-1.5 rounded-md shadow-sm"
            value={dataView}
            onChange={e => handleViewChange(e.target.value)}
          >
            {VIEWS.map(view => (
              <option key={view} value={view}>{view}</option>
            ))}
          </select>
        </div>

        {activeTab === 'Blood Sugar' && (
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            {dataView === 'Day' ? (
              <>
                <input
                  placeholder="Day (e.g. Fri)"
                  value={manualLabel}
                  onChange={e => setManualLabel(e.target.value)}
                  className="border px-3 py-1.5 rounded"
                />
                <select
                  className="border px-2 py-1.5 rounded"
                  value={timeOfDay}
                  onChange={e => setTimeOfDay(e.target.value)}
                >
                  {TIME_OPTIONS.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </>
            ) : (
              <input
                placeholder={dataView === 'Month' ? 'Month (e.g. Apr)' : 'Year (e.g. 2025)'}
                value={manualLabel}
                onChange={e => setManualLabel(e.target.value)}
                className="border px-3 py-1.5 rounded"
              />
            )}

            <input
              placeholder="Value"
              value={manualValue}
              onChange={e => setManualValue(e.target.value)}
              className="border px-3 py-1.5 rounded"
            />
            <button
              onClick={handleManualAdd}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded"
            >
              Add Entry
            </button>
          </div>
        )}

        <div className="bg-white p-6 rounded-2xl shadow-lg overflow-x-auto">
          {(() => {
            if (activeTab === 'Blood Sugar') {
              if (dataView === 'Day') {
                return (
                  <BarChart width={1000} height={400} data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="Morning" fill="#60a5fa" />
                    <Bar dataKey="Noon" fill="#fbbf24" />
                    <Bar dataKey="Night" fill="#ef4444" />
                  </BarChart>
                );
              } else {
                return (
                  <LineChart width={1000} height={400} data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="label" />
                    <YAxis />
                    <Tooltip />
                    <Line dataKey="Avg" stroke="#4f46e5" strokeWidth={2} />
                  </LineChart>
                );
              }
            }

            if (activeTab === 'Blood Pressure') {
              return (
                <LineChart width={1000} height={400} data={chartData}>
                  <XAxis dataKey="label" />
                  <YAxis />
                  <Tooltip />
                  <Line dataKey="systolic" stroke="#6366f1" />
                  <Line dataKey="diastolic" stroke="#10b981" />
                </LineChart>
              );
            }

            if (activeTab === 'Heart Rate') {
              return (
                <AreaChart width={1000} height={400} data={chartData}>
                  <XAxis dataKey="label" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="rate" stroke="#ec4899" fill="#fbcfe8" />
                </AreaChart>
              );
            }

            if (activeTab === 'Sleep') {
              return (
                <RadarChart outerRadius={150} width={1000} height={400} data={chartData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="quality" />
                  <PolarRadiusAxis />
                  <Radar dataKey="value" stroke="#14b8a6" fill="#14b8a6" fillOpacity={0.6} />
                  <Tooltip />
                </RadarChart>
              );
            }

            const key = Object.keys(chartData[0] || {}).find(k => k !== 'label');
            return (
              <LineChart width={1000} height={400} data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey={key} stroke="#0ea5e9" strokeWidth={2} />
              </LineChart>
            );
          })()}
        </div>
      </div>
    </div>
  );
};

export default Charts;
