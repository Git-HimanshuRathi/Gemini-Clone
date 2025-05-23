import { useState, useEffect } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

function App() {
  // State for dark mode with localStorage persistence
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  // State for sidebar collapsed state
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // State for current chat
  const [currentChat, setCurrentChat] = useState(Date.now().toString());

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
    localStorage.setItem('darkMode', !isDarkMode);
  };

  // Toggle sidebar collapsed state
  const toggleSidebar = () => {
    setIsSidebarCollapsed(prev => !prev);
  };

  // Handle new chat
  const handleNewChat = (newChatId) => {
    setCurrentChat(newChatId);
  };

  // Handle new message
  const handleNewMessage = (message) => {
    // Save the message to recent chats
    const recentChats = JSON.parse(localStorage.getItem('recentChats') || '[]');
    const newChat = {
      id: Date.now(),
      title: message.length > 30 ? message.substring(0, 30) + '...' : message,
      timestamp: new Date().toISOString()
    };
    const updatedChats = [newChat, ...recentChats].slice(0, 5);
    localStorage.setItem('recentChats', JSON.stringify(updatedChats));
  };

  return (
    <div className={`flex ${isDarkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
      <Sidebar 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} 
        onNewChat={handleNewChat}
        toggleSidebar={toggleSidebar}
        isCollapsed={isSidebarCollapsed}
      />
      <Main 
        isDarkMode={isDarkMode} 
        currentChat={currentChat}
        onNewMessage={handleNewMessage}
        isSidebarCollapsed={isSidebarCollapsed}
        toggleSidebar={toggleSidebar}
      />
    </div>
  );
}

export default App
