import React, { useState } from "react";
import { useGemini } from "../../hooks/useGemini";
import { assets } from "../../assets/assets";

function Main() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const { loading, error, generateResponse } = useGemini();

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = {
      text: input,
      isUser: true,
      timestamp: new Date().toISOString()
    };

    setChat(prev => [...prev, userMsg]);
    setInput("");

    try {
      const reply = await generateResponse(input);
      const botMsg = {
        text: reply,
        isUser: false,
        timestamp: new Date().toISOString()
      };
      setChat(prev => [...prev, botMsg]);
    } catch (err) {
      console.error("Failed to get response:", err);
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="flex-1 min-h-screen pb-[25vh] relative">
      <div className="flex items-center justify-between text-[22px] p-5 text-gray-600">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="User profile" className="w-[50px] rounded-full" />
      </div>

      <div className="max-w-[900px] mx-auto">
        {chat.length === 0 ? (
          <div className="my-[50px] text-[56px] text-[#c4c7c5] font-semibold">
            <p>
              <span className="bg-gradient-to-r from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent">
                {getGreeting()}, friend!
              </span>
            </p>
            <p>How can I help you today?</p>
          </div>
        ) : (
          <div className="space-y-4 px-4">
            {chat.map((msg) => (
              <div
                key={msg.timestamp}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] p-4 rounded-lg ${
                    msg.isUser ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {loading && (
          <div className="flex justify-center items-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            <p className="ml-2">Thinking...</p>
          </div>
        )}

        {error && (
          <div className="mx-4 p-4 bg-red-50 text-red-600 rounded-lg">
            {error}
          </div>
        )}
      </div>

      <div className="absolute bottom-0 w-full max-w-[900px] px-[20px] mx-auto">
        <div className="flex items-center justify-between gap-[20px] bg-[#f0f4f9] p-[10px_20px] rounded-full">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKey}
            placeholder="Ask me anything..."
            className="flex-1 bg-transparent border-none outline-none p-2 text-[18px]"
          />
          <div className="flex items-center gap-[15px]">
            <img src={assets.gallery_icon} alt="Upload image" className="w-[24px] cursor-pointer" />
            <img src={assets.mic_icon} alt="Voice input" className="w-[24px] cursor-pointer" />
            <img
              onClick={handleSend}
              src={assets.send_icon}
              alt="Send message"
              className="w-[24px] cursor-pointer"
            />
          </div>
        </div>
        <p className="text-[13px] my-[15px] text-center font-light">
          Gemini is your friendly AI assistant. Ask me anything!
        </p>
      </div>
    </div>
  );
}

export default Main;