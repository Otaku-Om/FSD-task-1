import React, { useState } from 'react';
import "./chatContent.css";
import { IoArrowBackCircle } from "react-icons/io5";
import { RiDeleteBinFill } from "react-icons/ri";
import { RiSendPlaneFill } from "react-icons/ri";
import Message from '../message/Message';

function ChatContent({ info, msg }) {

  return (
    <div className='chatContent'>
      <div className="top">
        <div className="topLeft">
          <div className="imgBox">
            <img src={info[0].proImg} alt="jdslk" />
          </div>
          <h2>{info[0].username}</h2>
        </div>
        <div className="topRight">
          <p><span><IoArrowBackCircle /></span> Back</p>
          <p><span><RiDeleteBinFill /></span> Delete</p>
        </div>
      </div>
      <div className="main">
        <Message msgs={msg[0]} info={info[0]} />
        <div className="messageBox">
          <input type="text" className="messageInput" placeholder='Message' />
          <span><RiSendPlaneFill /></span>
        </div>

      </div>
    </div>
  )
}

export default ChatContent
