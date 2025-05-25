import { Paperclip, Send, Smile } from 'lucide-react';
import { useState } from 'react';
import './ChatWindow.css';

const ChatWindow = ({ messages, onSendMessage, onToggleAiSidebar }) => {
  const [messageText, setMessageText] = useState('');

  const handleSendMessage = () => {
    onSendMessage(messageText);
    setMessageText('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chat-window">
      <div className="messages-container">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message-wrapper ${message.sender === 'user' ? 'user-message-wrapper' : 'agent-message-wrapper'}`}
          >
            <div className={`message ${message.sender === 'user' ? 'user-message' : 'agent-message'}`}>
              {message.text}
            </div>
            <div className="message-time">{message.time}</div>

            {/* ✨ AI Option Button */}
            <div className="message-options">
              <button className="open-ai-btn" onClick={onToggleAiSidebar} title="Open with AI">✨</button>
            </div>
          </div>
        ))}
      </div>

      {/* Clickable Fin Bubble */}
      <div className="ai-copilot" onClick={onToggleAiSidebar} style={{ cursor: 'pointer' }}>
        <div className="ai-icon">🤖</div>
        <div>
          <strong>Hi, I'm Fin AI Copilot</strong>
          <br />
          <span className="ai-subtext">Ask me anything about this conversation.</span>
        </div>
      </div>

      <div className="input-area">
        <div className="suggestions">
          <span className="suggestion-label">Suggested</span>
          <button className="suggestion-btn">🔄 How do I get a refund?</button>
        </div>

        <div className="input-container">
          <div className="input-wrapper">
            <Paperclip size={20} className="input-icon" />
            <input
              type="text"
              placeholder="Ask a question..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onKeyPress={handleKeyPress}
              className="message-input"
            />
            <Smile size={20} className="input-icon" />
          </div>
          <button
            onClick={handleSendMessage}
            className="send-button"
            disabled={!messageText.trim()}
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
