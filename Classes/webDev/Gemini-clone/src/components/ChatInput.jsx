import React from 'react';

const ChatInput = ({ input, setInput, handleSubmit, isDarkMode }) => {
  return (
    <div className={`fixed bottom-0 left-0 right-0 ${isDarkMode ? 'bg-[#1E1E1E] border-[#2D2D2D]' : 'bg-white border-gray-200'} border-t`}>
      <div className="max-w-3xl mx-auto px-4 py-4">
        <form onSubmit={handleSubmit} className="relative">
          <div className="flex items-center">
            <div className="absolute left-3 flex space-x-2">
              <button type="button" className={`p-1.5 rounded-lg hover:bg-gray-100/10 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button type="button" className={`p-1.5 rounded-lg hover:bg-gray-100/10 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Gemini"
              className={`w-full pl-24 pr-12 py-3 text-sm ${
                isDarkMode 
                  ? 'bg-[#2D2D2D] text-white border-[#2D2D2D]' 
                  : 'bg-gray-50 text-gray-900 border-gray-300'
              } rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
            <button
              type="submit"
              className={`absolute right-2 p-2 rounded-lg ${
                input.trim() 
                  ? 'text-blue-500 hover:bg-blue-50/10' 
                  : isDarkMode ? 'text-gray-400' : 'text-gray-400'
              }`}
              disabled={!input.trim()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatInput; 