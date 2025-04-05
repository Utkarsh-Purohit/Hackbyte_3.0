import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiChat';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your emotional support companion. How can I help you today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user'
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const botText = await getGeminiResponse(userMessage.text);
      const botMessage = {
        id: messages.length + 2,
        text: botText,
        sender: 'bot'
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: messages.length + 2,
          text: "Sorry, I couldn't process that. Please try again later.",
          sender: 'bot'
        }
      ]);
      console.error('Gemini error:', error);
    } finally {
      setIsTyping(false);
    }
  };

  const handleNewChat = () => {
    setMessages([
      {
        id: 1,
        text: "Hello! I'm your emotional support companion. How can I help you today?",
        sender: 'bot'
      }
    ]);
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col bg-white shadow-xl rounded-lg border border-gray-200 overflow-hidden">
      
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
        <h2 className="font-semibold text-lg text-indigo-600">Chat with Companion</h2>
        <button
          onClick={handleNewChat}
          className="text-sm text-indigo-500 hover:underline focus:outline-none"
        >
          New Chat
        </button>
      </div>

      {/* Scrollable Message Area */}
      <div
        className="p-4 space-y-4 overflow-y-auto scroll-smooth custom-scrollbar"
        style={{ maxHeight: '400px' }}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl text-sm whitespace-pre-line shadow-md ${
                message.sender === 'user'
                  ? 'bg-indigo-500 text-white rounded-br-none'
                  : 'bg-gray-100 text-gray-800 rounded-bl-none'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 px-4 py-3 rounded-2xl shadow-md">
              <div className="flex space-x-1">
                <span className="animate-pulse w-2 h-2 bg-gray-400 rounded-full"></span>
                <span className="animate-pulse w-2 h-2 bg-gray-400 rounded-full delay-150"></span>
                <span className="animate-pulse w-2 h-2 bg-gray-400 rounded-full delay-300"></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef}></div>
      </div>

      {/* Input Field */}
      <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
        <div className="flex">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
            placeholder="Type your message..."
          />
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-500 text-white font-medium rounded-r-full hover:bg-indigo-600 transition duration-300 shadow-md"
          >
            Send
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          This AI companion provides emotional support but is not a substitute for professional help.
        </p>
      </form>
    </div>
  );
};

export default ChatBot;
