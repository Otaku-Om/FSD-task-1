import React from 'react';
import "./avatar.css";

function Avatar({ url }) {
  return (
    <div className='box'>
      <img src={url} alt="info" />
    </div>
  )
}

export default Avatar
