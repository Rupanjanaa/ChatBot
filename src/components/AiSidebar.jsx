import { FileText, Lightbulb, MessageSquare, Send, Sparkles, X } from 'lucide-react';
import { useState } from 'react';
import './AiSidebar.css';

const AiSidebar = ({ onToggleAiSidebar }) => {
  const [aiMessages, setAiMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Fin AI Copilot. I can help you with this conversation by providing suggestions, drafting responses, or analyzing the customer's needs. What would you like me to help with?",
      sender: 'ai',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [aiInput, setAiInput] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleSendAiMessage = () => {
    if (!aiInput.trim()) return;
    const newMessage = {
      id: aiMessages.length + 1,
      text: aiInput,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setAiMessages([...aiMessages, newMessage]);
    setAiInput('');

    setTimeout(() => {
      const aiResponse = {
        id: aiMessages.length + 2,
        text: generateAiResponse(aiInput),
        sender: 'ai',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setAiMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const generateAiResponse = (input) => {
    const responses = [
      "Would you like me to summarize this chat?",
      "This seems like a refund issue. Want me to draft a reply?",
      "Try offering empathy and confirming item status.",
      "Sentiment is calm. Suggest confirming delivery time.",
      "Customer seems polite but concerned. Offer reassurance."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const quickActions = [
    { icon: MessageSquare, label: 'Draft Response', action: 'draft' },
    { icon: Lightbulb, label: 'Get Suggestions', action: 'suggest' },
    { icon: FileText, label: 'Summarize Chat', action: 'summarize' },
    { icon: Sparkles, label: 'Analyze Sentiment', action: 'analyze' }
  ];

  const handleQuickAction = (action) => {
    const responses = {
      draft: "Here's a suggested response for the refund concern...",
      suggest: "Suggestions: empathize, confirm item status, explain policy.",
      summarize: "Chat Summary: Luis asked for a refund for an unopened item...",
      analyze: "Sentiment: calm. Urgency: low. Recommend standard response."
    };

    const aiResponse = {
      id: aiMessages.length + 1,
      text: responses[action],
      sender: 'ai',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setAiMessages([...aiMessages, aiResponse]);
  };

  return (
    <div className={`ai-sidebar ${isFullscreen ? 'fullscreen' : ''}`}>
      <div className="ai-sidebar-header">
        <div className="ai-header-left">
          <Sparkles size={20} className="ai-icon" />
          <h3 className="ai-title">AI Copilot</h3>
        </div>
        <div className="ai-header-controls">
          <button className="ai-expand-btn" onClick={() => setIsFullscreen(!isFullscreen)}>
            {isFullscreen ? '🡸' : '🡺'}
          </button>
          <X size={20} className="ai-close-btn" onClick={onToggleAiSidebar} />
        </div>
      </div>

      <div className="ai-quick-actions">
        <h4 className="quick-actions-title">Quick Actions</h4>
        <div className="quick-actions-grid">
          {quickActions.map((action, i) => (
            <button key={i} className="quick-action-btn" onClick={() => handleQuickAction(action.action)}>
              <action.icon size={16} />
              <span>{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="ai-messages-container">
        {aiMessages.map((msg) => (
          <div key={msg.id} className={`ai-message-wrapper ${msg.sender === 'user' ? 'user-ai-message-wrapper' : 'ai-ai-message-wrapper'}`}>
            <div className={`ai-message ${msg.sender === 'user' ? 'user-ai-message' : 'ai-ai-message'}`}>
              {msg.text}
            </div>
            <div className="ai-message-time">{msg.time}</div>
          </div>
        ))}
      </div>

      <div className="ai-input-area">
        <div className="ai-input-container">
          <input
            type="text"
            placeholder="Ask AI Copilot..."
            value={aiInput}
            onChange={(e) => setAiInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendAiMessage()}
            className="ai-message-input"
          />
          <button onClick={handleSendAiMessage} className="ai-send-button" disabled={!aiInput.trim()}>
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiSidebar;
