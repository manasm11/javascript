// Symbol always creates a new id
s1 = Symbol()
console.log(typeof s1)

s2 = Symbol("Description")
console.log(s2.toString())

console.log('')
s3 = Symbol("Description")
s4 = Symbol()
console.log(s1 === s4)
console.log(s2 == s3)
console.log('')

// Add symbol to global registry
s5 = Symbol.for('Key1')
s6 = Symbol.for('Key1')
console.log(s5 == s6)
console.log(Symbol.keyFor(s5))
console.log('')

// Uses
let fname = Symbol('FirstName')
let person = {
  [fname]: "Manas"
}

console.log(Object.getOwnPropertyNames(person))
console.log(Object.getOwnPropertySymbols(person))
console.log(person[fname])