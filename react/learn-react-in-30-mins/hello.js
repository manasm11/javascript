function assert(condition, message){
    if(!condition) {
        console.trace()
        throw message
    }
}

function f(a){
    assert(typeof a == 'string', `a=${a} is not a string`)
    console.log(a);
}
f('HELLO')
f(22)