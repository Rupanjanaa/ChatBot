import { MoreHorizontal, X } from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ contacts, selectedContact, onSelectContact, onToggleSidebar }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3 className="inbox-title">Your inbox</h3>
        <div className="header-icons">
          <MoreHorizontal size={16} className="icon" />
          <X size={16} className="close-btn" onClick={onToggleSidebar} />
        </div>
      </div>
      
      <div className="sidebar-sub-header">
        <span className="open-count">5 Open</span>
        <span className="waiting-longest">Waiting longest</span>
      </div>

      <div className="contacts-list">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className={`contact-item ${selectedContact.id === contact.id ? 'selected' : ''}`}
            onClick={() => onSelectContact(contact)}
          >
            <div className="avatar">
              {contact.avatar}
            </div>
            <div className="contact-info">
              <div className="contact-header">
                <span className="contact-name">{contact.name}</span>
                <span className="message-time">{contact.time}</span>
              </div>
              <div className="message-preview">
                {contact.message}
              </div>
            </div>
            {contact.unread > 0 && (
              <div className="unread-badge">{contact.unread}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;