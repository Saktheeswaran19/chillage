import React, { useState } from 'react';
import './stylesheets/inbox.css';
import Chat from './Chat'; // Import the Chat component

const messages = [
  {
    id: 1,
    sender: 'Alice',
    subject: 'Meeting Reminder',
    timestamp: '2023-10-01 10:00 AM',
    chatMessages: [
      { sender: 'Alice', text: 'Don’t forget our meeting tomorrow!', timestamp: '10:00 AM' },
      { sender: 'me', text: 'Thanks for the reminder!', timestamp: '10:01 AM' },
    ],
  },
  {
    id: 2,
    sender: 'Bob',
    subject: 'Project Update',
    timestamp: '2023-10-02 11:30 AM',
    chatMessages: [
      { sender: 'Bob', text: 'The project is on track.', timestamp: '11:30 AM' },
      { sender: 'me', text: 'Great to hear!', timestamp: '11:31 AM' },
    ],
  },
  {
    id: 3,
    sender: 'Charlie',
    subject: 'Lunch Plans',
    timestamp: '2023-10-03 12:15 PM',
    chatMessages: [
      { sender: 'Charlie', text: 'Are we still on for lunch?', timestamp: '12:15 PM' },
      { sender: 'me', text: 'Yes, see you at noon!', timestamp: '12:16 PM' },
    ],
  },
  {
    id: 4,
    sender: 'Diana',
    subject: 'Happy Birthday!',
    timestamp: '2023-10-04 09:00 AM',
    chatMessages: [
      { sender: 'Diana', text: 'Happy Birthday! 🎉', timestamp: '09:00 AM' },
      { sender: 'me', text: 'Thank you so much!', timestamp: '09:01 AM' },
    ],
  },
];

function MessageItem({ sender, subject, timestamp, onClick }) {
  return (
    <div className="message-item" onClick={onClick}>
      <div className="message-sender">{sender}</div>
      <div className="message-subject">{subject}</div>
      <div className="message-timestamp">{timestamp}</div>
    </div>
  );
}

function Inbox() {
  const [selectedChat, setSelectedChat] = useState(null);

  const handleMessageClick = (chatMessages) => {
    setSelectedChat(chatMessages);
  };

  return (
    <div className="inbox">
      <h2>Messages Inbox</h2>
      {selectedChat ? (
        <Chat messages={selectedChat} user={{ name: selectedChat[0].sender }} />
      ) : (
        <div className="messages-list">
          {messages.map((message) => (
            <MessageItem
              key={message.id}
              sender={message.sender}
              subject={message.subject}
              timestamp={message.timestamp}
              onClick={() => handleMessageClick(message.chatMessages)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Inbox;