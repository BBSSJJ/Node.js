const hello = (req, res) => {
    //  브라우저에서 "/"경로로 요청이 들어오면 뒤의 함수를 하겠다, 함수의 파라미터로 request와 response를 받는다
    res.render("home/index");
}

const login = (req, res) => {       // ` 사용 주의!! ' " 랑은 다름
    res.render("home/login");
}

module.exports = {
    hello,
    login
};