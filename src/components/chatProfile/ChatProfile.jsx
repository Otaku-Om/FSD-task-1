import React from 'react';
import "./chatProfile.css";

function ChatProfile({ name, description, profile, id }) {
  return (
    <div className={`chatProfile ${id === 1 ? "activeChat" : ""}`}>
      <div className="chatProfileImg">
         <img src={profile} alt="info" />
      </div>
      <div className="chatProfileInfo">
         <h2>{name}</h2>
         <p>{description}</p>
      </div>
    </div>
  )
}

export default ChatProfile
