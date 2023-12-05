import React, { useState } from 'react';
import "./chatList.css";
import ChatProfile from '../chatProfile/ChatProfile';
import { data } from "../index";
import { IoLogoWechat } from "react-icons/io5";

function ChatList() {

   const [chatData, setChatData] = useState([...data]);

  return (
    <div className='chatList'>
      <h2 className="chatHeading">ALL YOUR CHATS</h2>
      <button><span><IoLogoWechat /></span> Chat Images: ON</button>
      <p className='chatInfo'>When a bot sends you images, you will be charged one secondary image</p>
      <div className="chatSection">
         {chatData.map((chat, index) => (
            <ChatProfile key={index} name={chat.name} description={chat.description} profile={chat.profileImg} id={chat.id} />
         ))}
      </div>
      <div className='line' />
      <div className="createBtn">
         <span className='createBtnSign'>+</span>
         <span className='createBtnText'>Create new bot</span>
      </div>
    </div>
  )
}

export default ChatList
