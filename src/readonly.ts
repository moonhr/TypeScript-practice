let user:{
  readonly firstName:string
} = {
  firstName: 'abby'
}
user.firstName //string
//! user.firstName = 'abbey with an e' //읽기전용 프로퍼티로 할당불가

//가능한 빈객체는 지양함