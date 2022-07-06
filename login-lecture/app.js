//서버의 중심 파일
const express = require("express");             //  require로 express라는 모듈을 다운받는다
const app = express();                          // express 실행시켜서 app이라는 변수에 넣는다

app.get("/", (req, res) =>{                     //  브라우저에서 "/"경로로 요청이 들어오면 뒤의 함수를 하겠다, 함수의 파라미터로 request와 response를 받는다
    res.send("여기는 루트입니다.");
});

app.get("/login", (req, res) =>{
    res.send("여기는 로그인 화면입니다");
});

app.listen(3000, function() {                        // listen이라는 명령어로 port를 띄운다
    console.log("서버가동");
});                