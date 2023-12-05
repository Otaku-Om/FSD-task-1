import React from 'react';
import "./message.css";
import Avatar from "../avatar/Avatar";
import Boy from "../../assets/profile3.png"

function Message({ msgs, info }) {
  return (
    <div className='message'>
      
      <div className='bundleRight'>
         <p className='leftMsg'>{msgs.sender[0]}</p>
         <Avatar url={Boy} />
      </div>
      
      <p className='leftMsg extraPadRight'>{msgs.sender[1]}</p>
      <div className="bundleLeft">
        <Avatar url={info.proImg} />
        <p className='rightMsg'>{msgs.receiver[0]}</p>
      </div>
      <p className='rightMsg extraPadLeft'>{msgs.receiver[1]}</p>
      <div className="bundleRight">
        <p className='leftMsg'>{msgs.sender[2]}</p>
        <Avatar url={Boy} />
      </div>
      <div className="bundleLeft">
        <Avatar url={info.proImg} />
        <p className='rightMsg'>{msgs.receiver[2]}</p>
      </div>

    </div>
  )
}

export default Message
