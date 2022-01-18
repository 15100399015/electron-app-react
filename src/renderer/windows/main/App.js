import { ipcRenderer } from "electron";
import { Button } from "antd";
function App() {
  return (
    <div className="App">
      <Button
        onClick={() => {
          const NOTIFICATION_TITLE = "我是通知标题";
          const NOTIFICATION_BODY = "我是通知内容";
          new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY });
          ipcRenderer.send("readTxt", "消息参数");
        }}
      >
        点击按钮
      </Button>
    </div>
  );
}

export default App;
