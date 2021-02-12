const assert = {}
assert.is_string = function is_string(variable){
  if(typeof variable != 'string'){
    throw TypeError(`${variable} is not a string`)
  }
}

module.exports = assert;