import React, { useState, useMemo } from 'react';
import { assets } from '../../assets/assets';

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => setIsExpanded(prev => !prev);

  const formattedDate = useMemo(() => {
    const today = new Date();
    return today.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
  }, []);

  const SidebarButton = ({ icon, label }) => (
    <div
      className={`flex items-center gap-3 px-4 py-2 rounded-full cursor-pointer hover:bg-[#e2e6eb] ${
        !isExpanded && 'justify-center'
      }`}
    >
      <img src={icon} alt={label} className="w-[20px]" />
      {isExpanded && <span className="text-sm">{label}</span>}
    </div>
  );

  return (
    <aside
      className={`min-h-screen bg-[#f0f4f9] py-3 flex flex-col justify-between transition-all duration-200 ${
        isExpanded ? 'w-[250px] px-4' : 'w-[90px] px-2'
      } max-[600px]:hidden`}
    >
      <div>
        <img
          onClick={toggleSidebar}
          src={assets.menu_icon}
          alt="Toggle sidebar"
          className="w-[30px] cursor-pointer ml-2"
        />

        {isExpanded && (
          <p className="mt-4 text-sm text-gray-500">{formattedDate}</p>
        )}

        <div
          className={`mt-4 flex items-center gap-2 px-4 py-2 rounded-full text-sm text-gray-600 bg-[#e6eaf1] cursor-pointer hover:bg-[#dfe4ea] ${
            isExpanded ? 'w-full' : 'w-[50px] justify-center'
          }`}
        >
          <img src={assets.plus_icon} alt="New Chat" className="w-[20px]" />
          {isExpanded && <span>Start a new chat</span>}
        </div>

        {isExpanded && (
          <div className="mt-8">
            <h2 className="mb-4 text-[#585858] font-medium text-sm">Recent Conversations</h2>
            <div className="space-y-2">
              <div className="flex items-start gap-2 px-4 py-2 pr-10 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
                <img src={assets.message_icon} alt="Chat" className="w-[20px]" />
                <span className="text-sm truncate">What is React...</span>
              </div>
              <div className="flex items-start gap-2 px-4 py-2 pr-10 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
                <img src={assets.message_icon} alt="Chat" className="w-[20px]" />
                <span className="text-sm truncate">Travel recommendations...</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 mb-4">
        <SidebarButton icon={assets.question_icon} label="Help & Support" />
        <SidebarButton icon={assets.history_icon} label="Chat History" />
        <SidebarButton icon={assets.setting_icon} label="Settings" />
      </div>
    </aside>
  );
}

export default Sidebar;
