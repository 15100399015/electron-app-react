const { app } = require("electron");
// 引入主页面文件
const MainWindow = require("./windows/main/index");
app.on("ready", () => {
  // 实例化一个页面
  new MainWindow();
});
