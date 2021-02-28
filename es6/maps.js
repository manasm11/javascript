// Maps allow keys to be other than string, unlike objects
m = new Map()
m.set('fname', "Manas")
m.set({}, true)
console.log(m.size)
m.set({}, false)
console.log(m.get({}))