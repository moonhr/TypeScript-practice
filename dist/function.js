"use strict";
//이름을 붙인 함수
function greet(name) {
    return 'hello' + name;
}
//함수 표현식
let greet2 = function (name) {
    return 'hello' + name;
};
//화살표 함수 표현식
let greet3 = (name) => {
    return 'hello' + name;
};
//단축형 화살표 함수 표현식
let greet4 = (name) => 'hello' + name;
//함수 생성자 (타스에서 쓰지마라!!!)
let greet5 = new Function('name', 'return "hello" + name');
//* 선택적 매개변수
function log(message, userId = 'Not signed in') {
    let time = new Date().toISOString();
    console.log(time, message, userId);
}
log('User clicked in a button', 'da763be');
log('User signed out');
function logg(message, context = {}) {
    let time = new Date().toISOString();
    console.log(time, message, context.userId);
}
//# sourceMappingURL=function.js.map