/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./style.css";



const BackGroundVideo = () => {
  return (
    
    <div className="videoWrapper" >
      <video className="video" loop autoPlay muted >
        <source src={process.env.PUBLIC_URL + "./assets/Note-Reminder-Background-Video.mp4"} type="video/mp4"/>
      </video>
    </div>
  );
}

export default BackGroundVideo;