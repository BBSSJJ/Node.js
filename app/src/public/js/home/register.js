"use strict";


const id = document.querySelector("#id"),
    name = document.querySelector("#name"),      
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"), 
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register(){
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
        confirmPsword: confirmPsword.value, 
    };

    fetch("/register", {                   
        body: JSON.stringify(req),       
        method: "POST",       
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then(res => res.json())
    .then(res => {
        if(res.success){
            location.href = "/login";
        } else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("회원가입 중 에러 발생"));
    });            
}
