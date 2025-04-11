import React, { useState, useEffect } from 'react';
import { assets } from '../../assets/assets';

function Sidebar({ isDarkMode, toggleDarkMode, onNewChat, toggleSidebar, isCollapsed }) {
  const [recentChats, setRecentChats] = useState([]);

  useEffect(() => {
    const savedChats = localStorage.getItem('recentChats');
    if (savedChats) {
      setRecentChats(JSON.parse(savedChats));
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const savedChats = localStorage.getItem('recentChats');
      if (savedChats) {
        setRecentChats(JSON.parse(savedChats));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleNewChat = () => {
    localStorage.removeItem('chatMessages');
    const newChatId = Date.now().toString();
    onNewChat(newChatId);
  };

  return (
    <div className={`h-screen ${isDarkMode ? 'bg-[#1a1a1a]' : 'bg-[#f0f4f9]'} transition-all duration-300 ease-in-out ${isCollapsed ? 'w-[80px]' : 'w-[260px]'}`}>
      <div className="flex flex-col h-full">
        <div className="p-4">
          <button
            onClick={toggleSidebar}
            className={`p-2 rounded-lg ${
              isDarkMode ? 'bg-[#2d2d2d] text-white hover:bg-[#3d3d3d]' : 'bg-white text-gray-800 hover:bg-gray-100'
            } transition-colors duration-200`}
          >
            <img src={assets.menu_icon} alt="Toggle sidebar" className="w-5 h-5" />
          </button>
        </div>

        {!isCollapsed && (
          <>
            <div className="p-4">
              <button
                onClick={handleNewChat}
                className={`flex items-center gap-3 p-3 rounded-lg w-full ${
                  isDarkMode ? 'bg-[#2d2d2d] text-white hover:bg-[#3d3d3d]' : 'bg-white text-gray-800 hover:bg-gray-100'
                } transition-colors duration-200`}
              >
                <img src={assets.plus_icon} alt="New chat" className="w-5 h-5" />
                <span>New Chat</span>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="p-4">
                <h2 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  Recent Chats
                </h2>
                {recentChats.length === 0 ? (
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    No recent chats
                  </p>
                ) : (
                  <div className="space-y-2">
                    {recentChats.map((chat) => (
                      <div
                        key={chat.id}
                        className={`p-3 rounded-lg cursor-pointer ${
                          isDarkMode ? 'hover:bg-[#2d2d2d] text-gray-200' : 'hover:bg-gray-100 text-gray-800'
                        }`}
                      >
                        <p className="text-sm truncate">{chat.title}</p>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {new Date(chat.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="p-4">
              <button
                onClick={toggleDarkMode}
                className={`flex items-center gap-3 p-3 rounded-lg w-full ${
                  isDarkMode ? 'bg-[#2d2d2d] text-white hover:bg-[#3d3d3d]' : 'bg-white text-gray-800 hover:bg-gray-100'
                } transition-colors duration-200`}
              >
                <span className="text-xl">{isDarkMode ? '☀️' : '🌙'}</span>
                <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
