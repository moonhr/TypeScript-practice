// 변수 대신 타입 별칭으로 타입을 가리킬 수 있음
type Age = number
type Person = {
  name : string
  age : Age
}

let age : Age = 55
let driver : Person = {
  name : 'James May',
  age : age
}

//변수선언과 마찬가지로 하나의 타입을 두번 정의할 수 없음
type Color = 'red'
//! type Color = 'blue' 불가

let x = Math.random() < .5
if(x) {
  type Color = 'blue' //위의 Color 정의를 덮어씀
  let b : Color = 'blue'
} else {
  let c : Color = 'red'
}
console.log(x)