"use strict";
//? 타입스크립트는 다음의 값을 어떻게 추론할까?
//* const와 같이 값이 바뀌지 않는 병수일 경우 타입을 명시하면 타입이 넓어지지 않도록 막을 수 있다.
let a = 1042; //number
let b = 'apples and oranges'; //string
const c = 'pineapples'; //'pineapples'
let d = [true, true, false]; //boolean[]
let e = { type: 'ficus' }; //type : string
let f = [1, false]; //number | boolean[]
const g = [3]; //number[]
let h = null; //null
//?다음 코드는 왜 주석에 적힌 에러를 발생시킬까?
let i = 3;
i = 4;
//i는 3타입만 받는다.
let j = [12, 3];
j.push(4);
j.push('5');
//j는 타스에서 number타입으로 추론되어 정의됨
let k = 4;
//never타입은 공타입이다
let l = 4;
let m = l * 2;
//# sourceMappingURL=practice3.js.map