// Maps allow keys to be other than string, unlike objects
m = new Map()
m.set('fname', "Manas")
m.set({}, true)
m.set(true, "Sahi me !!!")
console.log(m.size)
console.log(m.get('fname'))
console.log(m.has('fname'))
m.clear();
console.log(m.size)

// MISC
console.log(m.size)
o1 = {}
o2 = {}
m.set(o1, "Hello")
m.set(o2, "Hello")
console.log(m.get(o1))

h1 = "HELLO"
h2 = "HELLO"
m.set(h1, "heallo")
m.set(h2, "HOLA")
console.log(m.get(h1))