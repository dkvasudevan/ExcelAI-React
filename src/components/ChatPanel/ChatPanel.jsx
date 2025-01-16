import './ChatPanel.css';
import FileInputPanel from './FileInputPanel/FileInputPanel';

function ChatPanel() {
  return (
    <>
      <div className="ChatPanel">
        <div className="FileInput">
          <FileInputPanel />
        </div>
      </div>
    </>
  );
}

export default ChatPanel;
