"use strict";
const app = require("../app")
const PORT = 3000;

//서버를 띄워주는 코드
app.listen(PORT, () => {
    // listen이라는 명령어로 port를 띄운다
    console.log("서버가동");
  });
  