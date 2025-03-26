import { useState } from 'react';
import { FiSend, FiX } from 'react-icons/fi';
import { sendMessageToChatbot } from '../api';

const Chatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! I'm your portfolio assistant. Ask me anything about the portfolio.", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMessage = { id: messages.length + 1, text: inputValue, isBot: false };
    setMessages([...messages, newUserMessage]);
    setInputValue('');
    setLoading(true);

    try {
      const botResponse = await sendMessageToChatbot(inputValue);
      const newBotMessage = { id: messages.length + 2, text: botResponse, isBot: true };

      setMessages(prev => [...prev, newBotMessage]);
    } catch (error) {
      const errorMessage = { id: messages.length + 2, text: "Error: Could not fetch response.", isBot: true };
      setMessages(prev => [...prev, errorMessage]);
    }

    setLoading(false);
  };

  return (
    <div className="fixed bottom-20 right-6 w-full max-w-md bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-20 transition-all duration-300">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex justify-between items-center">
        <h3 className="text-white font-semibold">Portfolio Assistant</h3>
        <button 
          onClick={onClose}
          className="text-white hover:text-gray-200 focus:outline-none"
          aria-label="Close chatbot"
        >
          <FiX size={20} />
        </button>
      </div>
      
      <div className="h-80 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div 
              className={`max-w-xs md:max-w-md rounded-lg px-4 py-2 ${message.isBot ? 'bg-gray-100 text-gray-800' : 'bg-blue-600 text-white'}`}
            >
              {message.text}
            </div>
          </div>
        ))}
        {loading && <p className="text-gray-500 text-center">Thinking...</p>}
      </div>
      
      <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-4 flex">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask about the portfolio..."
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Chat input"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Send message"
          disabled={loading}
        >
          <FiSend size={20} />
        </button>
      </form>
    </div>
  );
};

export default Chatbot;