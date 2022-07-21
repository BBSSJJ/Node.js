"use strict";

// DOM 이용, DOM -> Document Object Model 문서 객체 모델, 일종의 인터페이스
// javascript에서 html에 존재하는 data들을 가져와서 제어가능해진다

const id = document.querySelector("#id"),         // 질의 선택자, 선택자를 통해서 html의 값을 가져온다, #은 tag에 id로 부여된 'id'를 가져오라는 뜻
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id: id.value,
        psword: psword.value,
    };
    console.log(req);
    console.log(JSON.stringify(req));
    fetch("/login", {                   //서버와 프론트가 어떤 경로에서 주고받을지 정해준다
        body: JSON.stringify(req),       //두 번째 파라미터로 전달할 데이터를 오브젝트 형태로 보내줘야 한다. req라는 데이터를 JSON이라는 data type으로 data전달할 것이므로 json형태로 감싸준다
        method: "POST",                   //body를 통해서 data를 전달할 때는 http 메소드 중 post로 보내야 한다.
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then(res => res.json())
    .then(res => {
        if(res.success){
            location.href = "/";
        } else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("로그인중 에러 발생"));
    });            
}
//fetch 끝에 .then()으로 data를 가져올 수 있다