//* generator function
//* 여러개의 값을 생산하는 편리한 기능 제공 / for문같은애

function* createFibonacciGenerator(){
  let a = 0
  let b = 1
  while(true){
    yield a;
    [a,b] = [b, a+b]
  }
}
//next = 제너레이더 주요 메서드
//가까운 yield <value>문을 만날 때까지 실행이 지속
//next의 반환객체 1. value: 산출 값 2. done: 함수 코드 실행이 끝났으면 true, 아니라면 false
let fibonacciGenerator = createFibonacciGenerator()
fibonacciGenerator.next()
fibonacciGenerator.next()
fibonacciGenerator.next()

//IterableIterator 에서 방출하는 타입을 감싸서 제너레이터 타입 명시
function* createNumbers() : IterableIterator<number>{
  let n = 0
  while (1) {
    yield n++
  }
}

let numbers = createNumbers()
numbers.next()
numbers.next()
numbers.next()