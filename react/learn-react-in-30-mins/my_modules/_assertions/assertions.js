function _check(condition, message, variable){
    if (condition) return true
    console.trace()
    console.log('variable=', variable);
    throw message
}

module.exports.checkString = function checkString(variable){
    _check(typeof variable == 'string', `${variable} is not a string`, variable)
}
module.exports.checkNum = function checkNum(variable){
    _check(typeof variable == 'number', `${variable} is not a number`, variable)
}
module.exports.checkBool = function checkBool(variable){
    _check(typeof variable == 'boolean', `${variable} is not a boolean`, variable)
}
module.exports.checkArr = function checkArr(variable){
    _check(typeof variable == 'object', `${variable} is not an array`, variable)
    _check(typeof variable.length == 'number' , `${variable} is not an array`, variable)
}
module.exports.checkObj = function checkObj(variable){
    _check(typeof variable == 'object', `${variable} is not an object`, variable)
    _check(variable.length == undefined  , `${variable} is not an object, its an array`, variable)
}
module.exports.checkDefined = function checkDefined(variable){
    console.log(typeof variable);
    _check(typeof variable != 'undefined', `${variable} is undefined`, variable)
}
module.exports.checkFunc = function checkFunc(variable){
    console.log(typeof variable);
    _check(typeof variable == 'function', `${variable} is undefined`, variable)
}

