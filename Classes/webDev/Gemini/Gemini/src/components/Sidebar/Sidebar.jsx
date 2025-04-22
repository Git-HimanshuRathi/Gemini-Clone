import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';

const Sidebar = ({
  isDarkMode,
  toggleDarkMode,
  onNewChat,
  toggleSidebar,
  isCollapsed,
}) => {
  const [recentChats, setRecentChats] = useState([]);


  useEffect(() => {
    const stored = localStorage.getItem('recentChats');
    if (stored) {
      try {
        setRecentChats(JSON.parse(stored));
      } catch (err) {
        console.error('Could not parse recentChats:', err);
      }
    }
  }, []);

  useEffect(() => {
    const syncChatsFromStorage = () => {
      try {
        const updated = localStorage.getItem('recentChats');
        if (updated) {
          setRecentChats(JSON.parse(updated));
        }
      } catch (err) {
        console.error('Error syncing chats from storage:', err);
      }
    };

    window.addEventListener('storage', syncChatsFromStorage);
    return () => window.removeEventListener('storage', syncChatsFromStorage);
  }, []);

  const handleStartNewChat = () => {
    localStorage.removeItem('chatMessages');
    const id = Date.now().toString();
    onNewChat(id);
  };

  const sidebarBg = isDarkMode ? 'bg-[#1a1a1a]' : 'bg-[#f0f4f9]';
  const sectionBg = isDarkMode ? 'bg-[#2d2d2d]' : 'bg-white';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-800';
  const hoverBg = isDarkMode ? 'hover:bg-[#3d3d3d]' : 'hover:bg-gray-100';
  const secondaryText = isDarkMode ? 'text-gray-400' : 'text-gray-500';

  return (
    <aside
      className={`h-screen transition-all duration-300 ${sidebarBg} ${
        isCollapsed ? 'w-[80px]' : 'w-[260px]'
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Collapse / Expand Button */}
        <div className="p-4">
          <button
            onClick={toggleSidebar}
            className={`p-2 rounded-lg ${sectionBg} ${textColor} ${hoverBg} transition-colors duration-200`}
          >
            <img src={assets.menu_icon} alt="Menu" className="w-5 h-5" />
          </button>
        </div>

       
        {!isCollapsed && (
          <>
       
            <div className="p-4">
              <button
                onClick={handleStartNewChat}
                className={`flex items-center gap-3 p-3 rounded-lg w-full ${sectionBg} ${textColor} ${hoverBg} transition-colors`}
              >
                <img src={assets.plus_icon} alt="New chat" className="w-5 h-5" />
                <span>New Chat</span>
              </button>
            </div>

 
            <div className="flex-1 overflow-y-auto px-4">
              <h3 className={`text-lg font-semibold mb-4 ${textColor}`}>
                Recent Chats
              </h3>

              {recentChats.length === 0 ? (
                <p className={`text-sm ${secondaryText}`}>Nothing here yet.</p>
              ) : (
                <ul className="space-y-2">
                  {recentChats.map((chat) => (
                    <li
                      key={chat.id}
                      className={`p-3 rounded-lg cursor-pointer ${textColor} ${hoverBg}`}
                    >
                      <p className="text-sm truncate">{chat.title}</p>
                      <p className={`text-xs ${secondaryText}`}>
                        {new Date(chat.timestamp).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>

        
            <div className="p-4 mt-auto">
              <button
                onClick={toggleDarkMode}
                className={`flex items-center gap-3 p-3 rounded-lg w-full ${sectionBg} ${textColor} ${hoverBg} transition-colors`}
              >
                <span className="text-xl">{isDarkMode ? '☀️' : '🌙'}</span>
                <span>{isDarkMode ? 'Switch to Light' : 'Switch to Dark'}</span>
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
