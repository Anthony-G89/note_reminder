/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
function App() {
  return (
    <div >
      {/* <img src={process.env.PUBLIC_URL + "./assets/login-img.jpg"} width={200} height={200}/> */}
      <video width="95%" height="90%" controls autoplay muted id="backGroundVideo" >
        <source src={process.env.PUBLIC_URL + "./assets/Note-Reminder-Background-Video.mp4"} type="video/mp4"/>
      </video>
    </div>
  );
}

export default App;
