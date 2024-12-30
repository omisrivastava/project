import React from "react";
import { useState } from "react";
import Chat from "../Chat";
const Footer = () => {
  const [showChat, setShowChat] = useState(false);
  const handleButtonClick = () => {
    setShowChat(!showChat);
  };
  return (
    <div>
      <footer>
        <img
          className="footer-logo"
          src="omi.jpg"
          width="90"
          height="90"
          alt="Footer Logo"
        />
        <div className="footer socials">
          <img
            src="all.jpeg"
            width="200"
            height="50"
            alt="Social Media Icons"
          />
        </div>
        <div className="copyright">
          Copyright 2019 Name PSD Template. All Rights Reserved.
        </div>
        <div class="chat-container">
          <button onClick={handleButtonClick} class="chat-button">
            {!showChat ? "💬 Chat with AI" : "✖️ Close chat"}
          </button>
          {showChat && <Chat />}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
