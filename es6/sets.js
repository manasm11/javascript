let s = new Set()
s.add("Hello")
s.add(1).add(true).add({name:"Hello"})
console.log(s.size)
console.log(s.has("Hello"))
console.log(s.has("Bye"))
s.delete(true)
s.delete(false)
console.log(s.size)

