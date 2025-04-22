import { useState, useEffect } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [currentChat, setCurrentChat] = useState(Date.now().toString())


  useEffect(() => {
    let saved = localStorage.getItem('darkMode')
    if (saved !== null) {
      setIsDarkMode(JSON.parse(saved))
    }
  }, [])

  const toggleDarkMode = () => {
    let newMode = !isDarkMode
    setIsDarkMode(newMode)
    localStorage.setItem('darkMode', JSON.stringify(newMode))
  }

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed)
  }

  const handleNewChat = (id) => {
    setCurrentChat(id)
  }

  const handleNewMessage = (message) => {
    let recentChats = localStorage.getItem('recentChats')
    if (recentChats) {
      recentChats = JSON.parse(recentChats)
    } else {
      recentChats = []
    }

    let title = message.length > 30 ? message.substring(0, 30) + "..." : message
    let chat = {
      id: Date.now(),
      title: title,
      timestamp: new Date().toISOString()
    }

    recentChats.unshift(chat)

    if (recentChats.length > 5) {
      recentChats = recentChats.slice(0, 5)
    }

    localStorage.setItem('recentChats', JSON.stringify(recentChats))
  }

  return (
    <div className={isDarkMode ? 'flex bg-[#1a1a1a]' : 'flex bg-white'}>
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
  )
}

export default App
