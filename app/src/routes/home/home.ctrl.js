"use strict";

const output = {
    home: (req, res) => {
        //  브라우저에서 "/"경로로 요청이 들어오면 뒤의 함수를 하겠다, 함수의 파라미터로 request와 response를 받는다
        res.render("home/index");
    },
    
    login: (req, res) => {       // ` 사용 주의!! ' " 랑은 다름
        res.render("home/login");
    },
}

const users = {
    id: ["woorimIT", "나개발", "김팀장"],
    psword: ["1234", "1234", "123456"],
}

const process = {
    login: (req, res) => {
        const id = req.body.id;
        const psword = req.body.psword;
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인 실패",
        })
    },
}
module.exports = {
    output,
    process,
};