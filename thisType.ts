//날짜의타입을 포매팅하는 유틸리티 함수
function fancyDate(this : Date) {
  return ${this.getDate()}/${this.getMonth()}/${this.getFullYear()}
}
fancyDate.call(new Date)
fancyDate()