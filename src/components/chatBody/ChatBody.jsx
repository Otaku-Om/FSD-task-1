import React, { useState } from 'react';
import "./chatBody.css";
import ChatList from '../chatList/ChatList';
import ChatContent from '../chatContent/ChatContent';
import { chats } from "../index";

function ChatBody() {
  const [info , setInfo] = useState([chats[0].userInfo, chats[1].userInfo]);
  const [msg, setMsg] = useState([chats[0].chat, chats[1].chat])

  return (
    <div className='chatBody section__padding'>
      <ChatList />
      <ChatContent info={info} msg={msg} />
    </div>
  )
}

export default ChatBody
