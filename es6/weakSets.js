// Removes from set if all references are removed
ws = new WeakSet()
let key = {}
ws.add(key)
console.log(ws.has(key))
key = null
// key is also removed from ws