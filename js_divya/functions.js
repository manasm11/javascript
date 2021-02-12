const assert  = require('./assertions')

function executeAfterPrinting(f){
  console.log('CALLING FUNCTIOn')
  f('Manas')
}

const func = name => console.log('FUNCTION', name)

executeAfterPrinting(func)

const f2 = () => {
  console.log('NEMMO');
  console.log('HBILKJ')
}
f2()

function printSomething(something){
  assert.is_string(something)
  console.log(something)
}
printSomething()