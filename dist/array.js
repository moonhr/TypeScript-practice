"use strict";
function buildArray() {
    //? 왜 a를 never로 추론하지??
    let a = [];
    a.push(1);
    a.push('x');
    return a;
}
let myArray = buildArray();
//! myArray.push(true) 할당불가
//타입은 배열에 하나씩만 넣는다
//사용할 배열 메서드가 줄어듦
//배열에 스트링만 필요할때는?
//# sourceMappingURL=array.js.map