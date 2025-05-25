import { Menu, MoreHorizontal, Phone } from 'lucide-react';
import './Header.css';

const Header = ({ selectedContact, currentConversation, sidebarVisible, onToggleSidebar }) => {
  return (
    <div className="chat-header">
      <div className="chat-header-left">
        {!sidebarVisible && (
          <button className="menu-toggle-btn" onClick={onToggleSidebar}>
            <Menu size={20} />
          </button>
        )}
        <div className="chat-avatar">{currentConversation.avatar}</div>
        <div>
          <h4 className="chat-contact-name">{currentConversation.name}</h4>
        </div>
      </div>
      <div className="chat-header-right">
        <MoreHorizontal size={20} className="header-icon" />
        <Phone size={20} className="header-icon" />
        <span className="close-btn">✕ Close</span>
      </div>
    </div>
  );
};

export default Header;

