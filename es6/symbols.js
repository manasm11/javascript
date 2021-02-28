// Symbol always creates a new id
s1 = Symbol()
console.log(typeof s1)

s2 = Symbol("Description")
console.log(s2.toString())

s3 = Symbol("Description")
s4 = Symbol()
console.log(s1 === s4)
console.log(s2 === s3)