import React, { useState, useEffect } from "react";
import { useGemini } from "../../hooks/useGemini";
import { assets } from "../../assets/assets";

function Main({ isDarkMode, currentChat, onNewMessage }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const { loading, error, generateResponse } = useGemini();
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    setMessages([]);
  }, [currentChat]);

  useEffect(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const handleSubmit = async () => {
    if (!input.trim()) return;

    const newMessage = {
      text: input,
      isUser: true,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, newMessage]);
    onNewMessage(input);
    setInput("");

    try {
      const response = await generateResponse(input);
      
      const botMessage = {
        text: response,
        isUser: false,
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      console.error("Failed to get response:", err);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className={`flex-1 min-h-screen pb-[25vh] relative ${isDarkMode ? 'bg-[#1a1a1a] text-white' : 'bg-white'}`}>
      <div className={`flex items-center justify-between text-[22px] p-5 ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}>
        <p>Gemini</p>
        <img src={assets.user_icon} alt="User profile" className="w-[50px] rounded-full" />
      </div>

      <div className="max-w-[900px] mx-auto">
        {messages.length === 0 ? (
          <div className={`my-[50px] text-[56px] ${isDarkMode ? 'text-gray-300' : 'text-[#c4c7c5]'} font-semibold`}>
            <p>
              <span className={`bg-gradient-to-r from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent`}>
                {getGreeting()}, friend!
              </span>
            </p>
            <p>How can I help you today?</p>
          </div>
        ) : (
          <div className="space-y-4 px-4">
            {messages.map((message, index) => (
              <div
                key={message.timestamp}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] p-4 rounded-lg ${
                    message.isUser
                      ? isDarkMode 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-blue-500 text-white'
                      : isDarkMode
                        ? 'bg-[#2d2d2d] text-gray-200'
                        : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {loading && (
          <div className="flex justify-center items-center py-4">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '300ms' }}></div>
              </div>
              <p className={`ml-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Gemini is thinking...</p>
            </div>
          </div>
        )}

        {error && (
          <div className={`mx-4 p-4 ${isDarkMode ? 'bg-red-900/50 text-red-200' : 'bg-red-50 text-red-600'} rounded-lg`}>
            {error}
          </div>
        )}
      </div>

      <div className="absolute bottom-0 w-full max-w-[900px] px-[20px] mx-auto">
        <div className={`flex items-center justify-between gap-[20px] ${isDarkMode ? 'bg-[#2d2d2d] border border-gray-700' : 'bg-[#f0f4f9]'} p-[10px_20px] rounded-full`}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything..."
            className={`flex-1 bg-transparent border-none outline-none p-2 text-[18px] ${isDarkMode ? 'text-gray-200 placeholder-gray-500' : 'text-gray-800'}`}
          />
          <div className="flex items-center gap-[15px]">
            <img src={assets.gallery_icon} alt="Upload image" className="w-[24px] cursor-pointer" />
            <img src={assets.mic_icon} alt="Voice input" className="w-[24px] cursor-pointer" />
            <img
              onClick={handleSubmit}
              src={assets.send_icon}
              alt="Send message"
              className="w-[24px] cursor-pointer"
            />
          </div>
        </div>
        <p className={`text-[13px] my-[15px] text-center font-light ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Gemini is your friendly AI assistant. Ask me anything!
        </p>
      </div>
    </div>
  );
}

export default Main;