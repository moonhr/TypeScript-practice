type Cat = {name: string, purrs: boolean}
type Dog = {name: string, barks: boolean, wags: boolean}
type CatOrDogOrBoth = Cat | Dog
type CatAndDog = Cat & Dog

//Cat
let ah: CatOrDogOrBoth = {
  name: 'Bonkers',
  purrs: true
}

//Dog
ah = {
  name: 'Domino',
  barks: true,
  wags: true
}

//둘 다
ah = {
  name: 'Donkers',
  barks: true,
  purrs: true,
  wags: true
}

let bb: CatAndDog = {
  name: 'Domino',
  barks: true,
  purrs: true,
  wags: true
}