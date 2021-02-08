function assert(condition, message){
    if(!condition) {
        console.trace()
        throw message
    }
}

function f(a){
    assert(typeof a == 'string', `a=${a} is not a string`)
    // alert(typeof booleanValue) // displays "boolean"
    // alert(typeof numericalValue) // displays "number"
    // alert(typeof stringValue) // displays "string"
    // alert(typeof stringObject) // displays "object"
    // alert(typeof somethingRandom) // displays "undefined"
    console.log(a);
}
f('HELLO')
f(22)