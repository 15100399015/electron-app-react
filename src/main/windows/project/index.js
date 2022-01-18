const { Window } = require("../../utils/windowClass");

module.exports = class extends Window {
  url = "http://localhost:3000/project.html";
  method = {
    readTxt: function (e, params) {
      console.log("project页面监听到事件了");
    },
  };
};
