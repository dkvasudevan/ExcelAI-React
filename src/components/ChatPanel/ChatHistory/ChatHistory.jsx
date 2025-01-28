import { useMyContext } from '../../../Context';
import { useEffect } from 'react';
import './ChatHistory.css';

function ChatHistory() {
  const { chatHistory, setChatHistory } = useMyContext();
  useEffect(() => {
    setChatHistory(chatHistory); // This will log the updated state
  }, [chatHistory]);
  return (
    <>
      <div className="chat-history-wrapper">
        <h1 className="chat-history-title">Chat History</h1>
        <div className="chat-history-messages">
          {chatHistory.map((msg, ind) => (
            <div className="message">{msg}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ChatHistory;
