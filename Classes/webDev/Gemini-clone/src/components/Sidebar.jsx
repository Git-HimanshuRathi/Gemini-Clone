import React from 'react';

const Sidebar = ({ isOpen, chatHistory, onChatSelect, isDarkMode, currentChatId }) => {
  return (
    <div 
      className={`fixed top-16 left-0 h-full w-72 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } ${isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200'} border-r`}
    >
      <div className="p-4">
        <button 
          className={`w-full flex items-center space-x-2 p-3 rounded-lg ${
            isDarkMode ? 'hover:bg-[#2D2D2D]' : 'hover:bg-gray-100'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isDarkMode ? 'text-white' : 'text-gray-700'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>New chat</span>
        </button>
      </div>

      <div className="px-2">
        <div className={`px-2 py-2 text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Recent chats
        </div>
        <div className="space-y-1">
          {chatHistory.map((chat) => (
            <button
              key={chat.id}
              onClick={() => onChatSelect(chat.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left ${
                currentChatId === chat.id
                  ? isDarkMode 
                    ? 'bg-[#2D2D2D]' 
                    : 'bg-gray-100'
                  : isDarkMode 
                    ? 'hover:bg-[#2D2D2D]' 
                    : 'hover:bg-gray-100'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <div className="flex-1 truncate">
                <div className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} truncate`}>
                  {chat.title}
                </div>
                <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} truncate`}>
                  {new Date(chat.timestamp).toLocaleDateString()}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 