const { BrowserWindow, ipcMain } = require("electron");
/**
 * 窗口父类
 */
module.exports.Window = class Window {
  // 窗口实例
  window = null;
  // 窗口默认配置
  defaultConfig = {
    width: 400,
    height: 400,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  };
  constructor() {
    setTimeout(() => this.init());
  }
  // 初始化
  init() {
    this.createWindow();
    this.mount && this.mount();
    if (this.method) {
      Object.entries(this.method).forEach(([key, value]) => {
        ipcMain.on(key, value);
      });
    }
  }
  createWindow() {
    // 合并配置 创建窗口
    this.window = new BrowserWindow(Object.assign(this.defaultConfig, this.options));
    console.log(this);
    this.window.loadURL(this.url);
  }
};
