import React, { useState } from 'react';

const moods = [
  { emoji: '😊', label: 'Happy', value: 'happy' },
  { emoji: '😐', label: 'Neutral', value: 'neutral' },
  { emoji: '😔', label: 'Sad', value: 'sad' },
  { emoji: '😠', label: 'Angry', value: 'angry' },
  { emoji: '😨', label: 'Anxious', value: 'anxious' },
];

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [moodHistory, setMoodHistory] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedMood) return;
    
    const newEntry = {
      date: new Date().toISOString().split('T')[0],
      mood: selectedMood,
      note: note
    };
    
    setMoodHistory([...moodHistory, newEntry]);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setNote('');
    setSelectedMood(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-2">How are you feeling today?</h3>
          <div className="flex justify-between space-x-2">
            {moods.map((mood) => (
              <button
                key={mood.value}
                type="button"
                onClick={() => setSelectedMood(mood.value)}
                className={`flex-1 py-3 rounded-lg flex flex-col items-center transition duration-200 ${selectedMood === mood.value ? 'bg-indigo-100 border-2 border-indigo-300' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                <span className="text-2xl">{mood.emoji}</span>
                <span className="text-sm mt-1">{mood.label}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <label htmlFor="mood-note" className="block text-sm font-medium text-gray-700 mb-1">
            Add a note (optional)
          </label>
          <textarea
            id="mood-note"
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="What's contributing to your mood today?"
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={!selectedMood}
          className={`w-full px-4 py-2 rounded-md text-white font-medium ${!selectedMood ? 'bg-indigo-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'} transition duration-300`}
        >
          Record My Mood
        </button>
      </form>
      
      {submitted && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md text-center">
          Thank you for sharing your mood today!
        </div>
      )}
      
      {moodHistory.length > 0 && (
        <div className="mt-6">
          <h4 className="font-medium text-gray-700 mb-2">Your Mood History</h4>
          <div className="space-y-2">
            {moodHistory.slice().reverse().slice(0, 3).map((entry, index) => (
              <div key={index} className="flex items-center p-2 bg-gray-50 rounded-md">
                <span className="text-2xl mr-3">
                  {moods.find(m => m.value === entry.mood)?.emoji}
                </span>
                <div>
                  <div className="text-sm font-medium">{entry.date}</div>
                  {entry.note && (
                    <div className="text-xs text-gray-600 mt-1">{entry.note}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MoodTracker;