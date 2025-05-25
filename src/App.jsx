import { useState } from 'react';
import './App.css';
import AiSidebar from './components/AiSidebar';
import ChatWindow from './components/ChatWindow';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const contacts = [
  { id: 1, name: 'Luis • GitHub', message: 'Great! I have a question...', time: '8:04p', unread: false, avatar: 'LG' },
  { id: 2, name: 'Yvan • Nike', message: 'Hi there, I have a qu...', time: '8:03p', unread: 1, avatar: 'YN' },
  { id: 3, name: 'Lead from New York', message: 'Good morning, all me...', time: '8:02p', unread: 1, avatar: 'LN' },
  { id: 4, name: 'Sourcing API problems', message: 'Bug Report', time: '8:01p', unread: false, avatar: 'SA' },
  { id: 5, name: 'Miracle - Exemplary Bank', message: 'Hey there, I\'m here to...', time: '8:00p', unread: false, avatar: 'ME' }
];

const conversationData = {
  1: {
    name: 'Luis Easton',
    avatar: 'LE',
    messages: [
      {
        id: 1,
        text: "I bought a wedding dress your store in November as a Christmas gift for a member of my family. However, it turns out they have something very similar already. I was hoping you'd be able to refund me, as it is un-opened.",
        sender: 'user',
        time: '3:42pm'
      },
      {
        id: 2,
        text: "Let me just look into this for you, Luis.",
        sender: 'agent',
        time: '3:43pm'
      }
    ]
  },
  2: {
    name: 'Yvan Nike',
    avatar: 'YN',
    messages: [
      {
        id: 1,
        text: "Hi there, I have a question about my recent order. The delivery was scheduled for today but I haven't received it yet.",
        sender: 'user',
        time: '2:15pm'
      },
      {
        id: 2,
        text: "I understand your concern, Yvan. Let me check the tracking information for your order right away.",
        sender: 'agent',
        time: '2:16pm'
      },
      {
        id: 3,
        text: "I can see that your package is currently out for delivery and should arrive within the next 2 hours.",
        sender: 'agent',
        time: '2:17pm'
      }
    ]
  },
  3: {
    name: 'Lead from New York',
    avatar: 'LN',
    messages: [
      {
        id: 1,
        text: "Good morning, all members of our team are interested in your enterprise solution. Could you provide more details about pricing and features?",
        sender: 'user',
        time: '10:30am'
      },
      {
        id: 2,
        text: "Good morning! I'd be happy to help you with information about our enterprise solution. Let me send you our comprehensive package details.",
        sender: 'agent',
        time: '10:32am'
      }
    ]
  },
  4: {
    name: 'Sourcing API Team',
    avatar: 'SA',
    messages: [
      {
        id: 1,
        text: "Bug Report: We're experiencing issues with the API endpoint /v2/products. Getting 500 errors intermittently.",
        sender: 'user',
        time: '9:45am'
      },
      {
        id: 2,
        text: "Thank you for reporting this issue. I've escalated this to our development team. Can you provide more details about when these errors occur?",
        sender: 'agent',
        time: '9:47am'
      },
      {
        id: 3,
        text: "It seems to happen mostly during peak hours, around 2-4 PM EST. The error rate is about 15%.",
        sender: 'user',
        time: '9:50am'
      }
    ]
  },
  5: {
    name: 'Miracle from Exemplary Bank',
    avatar: 'ME',
    messages: [
      {
        id: 1,
        text: "Hey there, I'm here to discuss a potential partnership between Exemplary Bank and your fintech solutions.",
        sender: 'user',
        time: '4:20pm'
      },
      {
        id: 2,
        text: "Hello Miracle! That sounds very interesting. I'd love to learn more about what you have in mind for this partnership.",
        sender: 'agent',
        time: '4:22pm'
      }
    ]
  }
};

function App() {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [messages, setMessages] = useState(conversationData[1].messages);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [aiSidebarVisible, setAiSidebarVisible] = useState(false);

  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
    setMessages(conversationData[contact.id].messages);
  };

  const handleSendMessage = (messageText) => {
    if (messageText.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: messageText,
        sender: 'user',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      conversationData[selectedContact.id].messages = updatedMessages;
    }
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const toggleAiSidebar = () => {
    setAiSidebarVisible(!aiSidebarVisible);
  };

  return (
    <div className="app">
      {sidebarVisible && (
        <Sidebar
          contacts={contacts}
          selectedContact={selectedContact}
          onSelectContact={handleSelectContact}
          onToggleSidebar={toggleSidebar}
        />
      )}

      <div className={`main-content ${!sidebarVisible ? 'fullscreen' : ''}`}>
        <Header
          selectedContact={selectedContact}
          currentConversation={conversationData[selectedContact.id]}
          sidebarVisible={sidebarVisible}
          onToggleSidebar={toggleSidebar}
        />
        <ChatWindow
          messages={messages}
          onSendMessage={handleSendMessage}
          onToggleAiSidebar={toggleAiSidebar}
        />
      </div>

      {aiSidebarVisible && (
        <>
          <AiSidebar onToggleAiSidebar={toggleAiSidebar} />
          <div className="ai-backdrop" onClick={toggleAiSidebar}></div>
        </>
      )}
    </div>
  );
}

export default App;

