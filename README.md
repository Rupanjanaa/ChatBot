# React-Based Customer Chat Application with AI Copilot

This project is a responsive, component-driven chat interface developed using React. It simulates a customer support messaging system, enabling interaction between a customer and an agent. In addition to the standard messaging workflow, the application includes an integrated AI Copilot designed to enhance support efficiency through automated suggestions, drafting, summarization, and sentiment analysis.

The design emphasizes usability, modularity, and extensibility, making it suitable for integration into customer service platforms or internal support tools.

---

## Overview

The application consists of three primary sections:
1. **Sidebar** – Displays a list of conversations or contacts.
2. **Chat Window** – Facilitates real-time communication between a customer and an agent.
3. **AI Copilot Panel** – Offers AI-powered utilities to assist agents during conversations.

Each section is independently managed through modular React components, ensuring maintainability and separation of concerns.

---

## Key Features

### Chat Functionality
- Real-time message rendering with alignment based on sender (user or agent).
- Timestamp display for all messages.
- Scrollable chat history with responsive layout.
- Input area for composing and sending new messages, with `Enter` key support.

### AI Copilot Integration
- Accessible side panel that supports AI-driven interaction.
- Predefined quick actions:
  - Generate a draft reply to the current conversation.
  - Suggest follow-up responses.
  - Summarize the ongoing chat.
  - Analyze sentiment based on user tone.
- Accepts manual queries for customized AI feedback.
- Integrates with the chat thread for continuity and relevance.

### User Interface Design
- Clean, modern UI optimized for usability and readability.
- Structured layout separating contacts, active conversations, and AI support tools.
- Styled components with consistent behavior across screens.

---

## Technical Stack

### Front-End
- React – Core library used to build the component-based UI.
- Vite – Development server and build tool for fast development and optimized production builds.
- JavaScript (ES6+) – Business logic and state management.
- HTML5 / JSX – Markup structure for React components.
- CSS (Modular / Scoped) – Component-specific styling with responsive and theme-aware layouts.
- Lucide React – Icon library used for UI controls and interactions.

---

Website deployed @ https://rupanjanaa.github.io/ChatBot/

