// Keys has to be objects
wm = new WeakMap()
let ob1 = {}
wm.set(ob1, "Hello World")
console.log(wm.get(ob1))
ob1 = null