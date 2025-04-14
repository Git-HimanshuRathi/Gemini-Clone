import React from 'react';

const ChatMessage = ({ message, isDarkMode }) => {
  return (
    <div className={`py-4 ${message.isUser ? (isDarkMode ? 'bg-[#1E1E1E]' : 'bg-white') : (isDarkMode ? 'bg-[#242424]' : 'bg-gray-50')}`}>
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-start space-x-4">
          {!message.isUser && (
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          )}
          <div className={`flex-1 ${message.isUser ? 'text-right' : ''}`}>
            <div className={`inline-block rounded-2xl px-4 py-2 ${
              message.isUser 
                ? `${isDarkMode ? 'bg-blue-600' : 'bg-blue-600'} text-white` 
                : isDarkMode 
                  ? 'bg-[#2D2D2D] text-gray-100' 
                  : 'bg-white text-gray-900 border border-gray-200'
            }`}>
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
            </div>
          </div>
          {message.isUser && (
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                <span className="text-sm font-medium text-white">H</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage; 