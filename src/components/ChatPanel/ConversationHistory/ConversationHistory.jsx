import { useMyContext } from '../../../Context';
import { useEffect } from 'react';
import './ConversationHistory.css';

function ConversationHistory() {
  const { chatHistory, setChatHistory } = useMyContext();
  useEffect(() => {
    setChatHistory(chatHistory); // This will log the updated state
  }, [chatHistory]);
  return <div className="ConversationHistory">{chatHistory}</div>;
}

export default ConversationHistory;
