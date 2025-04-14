import { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import ChatMessage from './components/ChatMessage'
import ChatInput from './components/ChatInput'
import Sidebar from './components/Sidebar'
import { startChat, sendMessage } from './config/gemini'
import './App.css'

function App() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [chatHistory, setChatHistory] = useState([])
  const [currentChatId, setCurrentChatId] = useState(null)
  const [currentChat, setCurrentChat] = useState(null)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Load chat history from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem('chatHistory')
    if (savedHistory) {
      setChatHistory(JSON.parse(savedHistory))
    }
  }, [])

  // Save chat history to localStorage
  useEffect(() => {
    if (chatHistory.length > 0) {
      localStorage.setItem('chatHistory', JSON.stringify(chatHistory))
    }
  }, [chatHistory])

  const createNewChat = async () => {
    try {
      const chat = await startChat();
      const newChatId = Date.now().toString()
      const newChat = {
        id: newChatId,
        title: 'New Chat',
        timestamp: new Date().toISOString(),
        messages: []
      }
      setChatHistory(prev => [newChat, ...prev])
      setCurrentChatId(newChatId)
      setCurrentChat(chat)
      setMessages([])
    } catch (error) {
      console.error('Error creating new chat:', error);
    }
  }

  const updateChatTitle = (chatId, firstMessage) => {
    setChatHistory(prev => prev.map(chat => {
      if (chat.id === chatId) {
        return {
          ...chat,
          title: firstMessage.slice(0, 30) + (firstMessage.length > 30 ? '...' : ''),
          messages: [...chat.messages, { text: firstMessage, isUser: true }]
        }
      }
      return chat
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (input.trim()) {
      const userMessage = { text: input, isUser: true }
      
      // Create new chat if none exists
      if (!currentChat) {
        await createNewChat()
      }
      
      setMessages(prev => [...prev, userMessage])
      setInput('')
      setIsLoading(true)

      try {
        // Update chat history with the new message
        updateChatTitle(currentChatId, input)

        // Get response from Gemini API
        const response = await sendMessage(currentChat, input)
        
        const aiResponse = { 
          text: response, 
          isUser: false 
        }
        
        setMessages(prev => [...prev, aiResponse])
        
        // Update chat history with AI response
        setChatHistory(prev => prev.map(chat => {
          if (chat.id === currentChatId) {
            return {
              ...chat,
              messages: [...chat.messages, userMessage, aiResponse]
            }
          }
          return chat
        }))
      } catch (error) {
        console.error('Error getting response:', error);
        setMessages(prev => [...prev, { 
          text: "I apologize, but I encountered an error. Please try again.", 
          isUser: false 
        }])
      } finally {
        setIsLoading(false)
      }
    }
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleChatSelect = async (chatId) => {
    try {
      const chat = await startChat();
      setCurrentChat(chat)
      setCurrentChatId(chatId)
      const selectedChat = chatHistory.find(chat => chat.id === chatId)
      if (selectedChat) {
        setMessages(selectedChat.messages)
      }
    } catch (error) {
      console.error('Error selecting chat:', error);
    }
  }

  return (
    <div className={`flex flex-col h-screen ${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-white'}`}>
      <Header 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode}
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />
      
      <Sidebar 
        isOpen={isSidebarOpen}
        chatHistory={chatHistory}
        onChatSelect={handleChatSelect}
        isDarkMode={isDarkMode}
        currentChatId={currentChatId}
      />

      {/* Main Content */}
      <div className={`flex-1 overflow-y-auto pb-32 transition-all duration-300 ${isSidebarOpen ? 'ml-72' : 'ml-0'}`}>
        {messages.length === 0 && (
          <div className={`flex flex-col items-center justify-center h-full text-center px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <div className="max-w-md">
              <h1 className={`text-4xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500`}>
                Hello
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 ml-2">
                  Himanshu
                </span>
              </h1>
              <p className="text-lg mb-8">How can I help you today?</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <button className={`p-4 rounded-xl ${isDarkMode ? 'bg-[#2D2D2D] hover:bg-[#353535]' : 'bg-gray-100 hover:bg-gray-200'} text-left`}>
                  <p className="font-medium mb-1">Help me write</p>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Write, edit, brainstorm</p>
                </button>
                <button className={`p-4 rounded-xl ${isDarkMode ? 'bg-[#2D2D2D] hover:bg-[#353535]' : 'bg-gray-100 hover:bg-gray-200'} text-left`}>
                  <p className="font-medium mb-1">Help me code</p>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Debug, explain, optimize</p>
                </button>
                <button className={`p-4 rounded-xl ${isDarkMode ? 'bg-[#2D2D2D] hover:bg-[#353535]' : 'bg-gray-100 hover:bg-gray-200'} text-left`}>
                  <p className="font-medium mb-1">Help me learn</p>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Explain concepts</p>
                </button>
                <button className={`p-4 rounded-xl ${isDarkMode ? 'bg-[#2D2D2D] hover:bg-[#353535]' : 'bg-gray-100 hover:bg-gray-200'} text-left`}>
                  <p className="font-medium mb-1">Help me analyze</p>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Analyze data and text</p>
                </button>
              </div>
            </div>
          </div>
        )}
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} isDarkMode={isDarkMode} />
        ))}
        {isLoading && (
          <div className={`py-4 ${isDarkMode ? 'bg-[#242424]' : 'bg-gray-50'}`}>
            <div className="max-w-3xl mx-auto px-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <ChatInput 
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
        isDarkMode={isDarkMode}
      />
    </div>
  )
}

export default App
