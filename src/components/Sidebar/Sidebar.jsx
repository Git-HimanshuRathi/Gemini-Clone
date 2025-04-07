import React, { useState } from 'react'
import { assets } from '../../assets/assets'

function Sidebar() {
    const [extended, setextended] = useState()
  return (
    <div className="min-h-screen inline-flex flex-col justify-between bg-[#f0f4f9] px-4 py-2 max-[600px]:hidden">
      <div className="mt-4">
        <img onClick={() => setextended(prev => !prev)} className="ml-2 w-[30px] cursor-pointer" src={assets.menu_icon} alt="" />

        <div className="mt-12 inline-flex items-center gap-2 px-4 py-2 bg-[#e6eaf1] rounded-full text-sm text-gray-500 cursor-pointer">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>

    { extended ?
        <div className="flex flex-col animate-fadeIn">
          <p className="mt-8 mb-5">Recent</p>
          <div className="flex items-start gap-2 px-4 py-2 pr-10 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
            <img src={assets.message_icon} alt="" />
            <p>What is react ...</p>
          </div>
        </div> 
    : null }
      </div>

      <div className="flex flex-col space-y-2">

        <div className="flex items-center gap-2 pr-2 cursor-pointer">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>

        <div className="flex items-center gap-2 pr-2 cursor-pointer">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>

        <div className="flex items-center gap-2 pr-2 cursor-pointer">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>

      </div>
    </div>

  )
}

export default Sidebar