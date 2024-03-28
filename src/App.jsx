import React from "react";
import Apk from "./assets/beyondthepitch.apk";
import './App.css'

function App() {
  return (
    <div>
    <div className="container">
      <div className="content">
        <p className="title">BEYOND THE <span style={{color:"#ff7b00"}}>PITCH</span></p>
        <p className="subtitle">What Predictions Will You Check Out Today?</p>
        <div className="button-container">
          <a
            href={Apk}
            download='BeyondThePitch'
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            Download APK
          </a>
          <a href="https://btp-website-2k9f.onrender.com/" className="button">
            Predict On Web
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;