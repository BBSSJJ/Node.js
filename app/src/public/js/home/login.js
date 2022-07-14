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
}