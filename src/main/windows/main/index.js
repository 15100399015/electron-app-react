const { Window } = require("../../utils/windowClass");
require("electron/common");

module.exports = class extends Window {
  url = "http://localhost:3000/main.html";
  method = {
    readTxt: function (e, params) {
      console.log("main页面监听到事件了");
    },
  };
};
