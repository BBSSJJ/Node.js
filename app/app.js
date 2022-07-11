//express 이용x
/*
const http = require("http");                   // http는 내장모듈
const app = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});        // 한글 설정 방법, 200: 정상응답 코드, 내가 보내는게 html이고 utf-8로 해석을 해달라고 응답
    if(req.url === "/"){
        res.end("여기는 루트입니다");
    } else if(req.url === "/login"){
        res.end("여기는 로그인 화면입니다.");
    }
});
// 이렇게 if문으로 하면 express에 비해 지저분해진다

app.listen(3001, () =>{
    console.log("http로 가동된 서버입니다");        
});
*/

//express 이용

// 모듈
const express = require("express"); //  require로 express라는 모듈을 다운받는다
const app = express(); // express 실행시켜서 app이라는 변수에 넣는다


// 라우팅
const home = require("./src/routes/home");


// 앱 세팅
app.set("views", "./src/views");    // 화면 view를 관리해줄 파일이 저장될 폴더 이름을 두번째 파라미터로 넘겨준다
app.set("view engine", "ejs");  // ejs를 view engine으로 사용할 것이다, html과 비슷

app.use("/", home);      // use -> 미들웨어를 등록해주는 메서드
app.use(express.static(`${__dirname}/src/public`));

module.exports = app;