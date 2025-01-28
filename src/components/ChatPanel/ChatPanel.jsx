import './ChatPanel.css';
import FileInputPanel from './FileInputPanel/FileInputPanel';
import ChatHistory from './ChatHistory/ChatHistory';

function ChatPanel() {
  return (
    <>
      <div className="ChatPanel">
        <ChatHistory />
        <div className="FileInput">
          <FileInputPanel />
        </div>
      </div>
    </>
  );
}

export default ChatPanel;
