export function check(condition, message, variable){
    if (condition) return true
    console.trace()
    console.log('variable=', variable);

    
    throw message
}

export function checkString(variable){
    check(typeof variable == 'string', `${variable} is not a string`, variable)
}
export function checkNum(variable){
    check(typeof variable == 'number', `${variable} is not a number`, variable)
}
export function checkBool(variable){
    check(typeof variable == 'boolean', `${variable} is not a boolean`, variable)
}
export function checkArr(variable){
    check(typeof variable == 'object', `${variable} is not an array`, variable)
    check(typeof variable.length == 'number' , `${variable} is not an array`, variable)
}
export function checkObj(variable){
    check(typeof variable == 'object', `${variable} is not an object`, variable)
    check(variable.length == undefined  , `${variable} is not an object, its an array`, variable)
}
export function checkDefined(variable){
    console.log(typeof variable);
    check(typeof variable != 'undefined', `${variable} is undefined`, variable)
}
export function checkFunc(variable){
    console.log(typeof variable);
    check(typeof variable == 'function', `${variable} is undefined`, variable)
}

