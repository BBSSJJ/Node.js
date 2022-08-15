"use strict";

const User = require("../../models/User");

const output = {
    home: (req, res) => {
        //  브라우저에서 "/"경로로 요청이 들어오면 뒤의 함수를 하겠다, 함수의 파라미터로 request와 response를 받는다
        res.render("home/index");
    },
    
    login: (req, res) => {       // ` 사용 주의!! ' " 랑은 다름
        res.render("home/login");
    },

    register: (req, res) => {
        res.render("home/register");
    }
}


const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};