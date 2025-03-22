
import React from 'react';
import './stylesheets/chat.css'; 

const Chat = ({ messages, user }) => {
  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>{user.name}</h2>
      </div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === 'me' ? 'my-message' : 'their-message'}`}>
            <p>{message.text}</p>
            <span className="timestamp">{message.timestamp}</span>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Type a message..." />
        <button>Send</button>
      </div>
    </div>
  );
};

export default Chat;