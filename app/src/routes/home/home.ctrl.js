"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
    home: (req, res) => {
        //  브라우저에서 "/"경로로 요청이 들어오면 뒤의 함수를 하겠다, 함수의 파라미터로 request와 response를 받는다
        res.render("home/index");
    },
    
    login: (req, res) => {       // ` 사용 주의!! ' " 랑은 다름
        res.render("home/login");
    },
}


const process = {
    login: (req, res) => {
        const id = req.body.id;
        const psword = req.body.psword;
        const users = UserStorage.getUsers("id", "psword");

        const response = {};
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "로그인에 실패하셨습니다.";
        return res.json(response);
    },
}
module.exports = {
    output,
    process,
};