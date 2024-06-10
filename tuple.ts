import { ReadonlyTextRange } from "typescript"

// 자스는 배열과 튜플 둘 다 대괄호룰 사용하지만 타스는 대괄호를 배열 타입으로 추론함
let c:[number] = [1]

let d: [string, string, number] = ['malcolm', 'gladwell', 1963]
d = ['queen', 'ii', 1926]

type A = readonly string[]
type B = ReadonlyArray<string>
type C = Readonly<string[]>
type D = readonly [number, string]
type E = Readonly<[number, string]>