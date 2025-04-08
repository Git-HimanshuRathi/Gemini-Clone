import React , {useContext} from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

function Main() {

  const {onSent , recentPrompt, showResult , loading , resultData , setInput , input} = useContext(Context)
  return (
    <div className="flex-1 min-h-screen pb-[25vh] relative">
      <div className="flex items-center justify-between text-[22px] p-5 text-gray-600">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" className="w-[50px] rounded-full" />
      </div>

      <div className="max-w-[900px] mx-auto">
        <div className="my-[50px] text-[56px] text-[#c4c7c5] font-semibold">
          <p>
            <span className="bg-gradient-to-r from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent">
              Hello , dev .
            </span>
          </p>
          <p>How can I help u today ?</p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-[15px]">
          <div className="h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
            <p className="text-gray-600 text-[17px]">
              Suggest beautiful places to see on an upcoming road trip
            </p>
            <img src={assets.compass_icon} alt="" className="w-[35px] p-[5px] rounded-[20px] bg-white absolute bottom-[10px] right-[10px]" />
          </div>

          <div className="h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
            <p className="text-gray-600 text-[17px]">
              Briefly summarize this concept: urban planning
            </p>
            <img src={assets.bulb_icon} alt="" className="w-[35px] p-[5px] rounded-[20px] bg-white absolute bottom-[10px] right-[10px]" />
          </div>

          <div className="h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
            <p className="text-gray-600 text-[17px]">
              Brainstorm team bonding activities for our work retreat
            </p>
            <img src={assets.message_icon} alt="" className="w-[35px] p-[5px] rounded-[20px] bg-white absolute bottom-[10px] right-[10px]" />
          </div>

          <div className="h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
            <p className="text-gray-600 text-[17px]">
              Improve the readability of the following code
            </p>
            <img src={assets.code_icon} alt="" className="w-[35px] p-[5px] rounded-[20px] bg-white absolute bottom-[10px] right-[10px]" />
          </div>
        </div>

        <div className="absolute bottom-0 w-full max-w-[900px] px-[20px] mx-auto">
          <div className="flex items-center justify-between gap-[20px] bg-[#f0f4f9] p-[10px_20px] rounded-full">
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your prompt here !"
              className="flex-1 bg-transparent border-none outline-none p-2 text-[18px]"
            />
            <div className="flex items-center gap-[15px]">
              <img src={assets.gallery_icon} alt="" className="w-[24px] cursor-pointer" />
              <img src={assets.mic_icon} alt="" className="w-[24px] cursor-pointer" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="" className="w-[24px] cursor-pointer" />
            </div>
          </div>
          <p className="text-[13px] my-[15px] text-center font-light">
            Gemini is a chatbot that helps you with your daily tasks
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;