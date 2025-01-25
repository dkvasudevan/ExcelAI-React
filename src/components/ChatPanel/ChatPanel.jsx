import './ChatPanel.css';
import FileInputPanel from './FileInputPanel/FileInputPanel';
import ConversationHistory from './ConversationHistory/ConversationHistory';

function ChatPanel() {
  return (
    <>
      <div className="ChatPanel">
        <ConversationHistory />
        <div className="FileInput">
          <FileInputPanel />
        </div>
      </div>
    </>
  );
}

export default ChatPanel;
