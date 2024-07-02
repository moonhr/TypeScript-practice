//이름을 붙인 함수
function greet (name : string) {
  return 'hello' + name
}

//함수 표현식
let greet2 = function (name : string) {
  return 'hello' + name
}

//화살표 함수 표현식
let greet3 = (name : string) => {
  return 'hello' + name
}

//단축형 화살표 함수 표현식
let greet4 = (name : string) => 'hello' + name

//함수 생성자 (타스에서 쓰지마라!!!)
let greet5 = new Function('name', 'return "hello" + name')

//* 선택적 매개변수
function log(message : string, userId = 'Not signed in'){
  let time = new Date().toISOString()
  console.log(time, message, userId)
}
log('User clicked in a button','da763be')
log('User signed out')

//* 기본 매개변수
type Context = {
  appId? : string
  userId? : string
}
function logg(message : string, context: Context = {}){
  let time = new Date().toISOString()
  console.log(time, message, context.userId)
}