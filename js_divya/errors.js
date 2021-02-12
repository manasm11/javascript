var a = 12

try{
  a = 43
}
catch(e){
  console.log('caught');
}finally{
  console.log('final')
}

function print(name){
  if(typeof name != 'string'){
    // console.trace()
    throw TypeError('name=', name, 'is not a string')
  }
  console.log(name);
}
print('Manas')
print(123)