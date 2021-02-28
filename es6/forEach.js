a = [2,4,6]
m = new Map([['fname', 'Manas'], ['lname', 'Mishra']]);
s = new Set([2,3,4,4])

a.forEach(function(value, index, array){
  console.log(`arr[${index}] = ${value}`)
  console.log(array===a)
})
console.log('')
m.forEach(function(value, key, map){
  console.log(`${key} : ${value}`)
  console.log(map===m)
})
console.log('')
s.forEach(function(value, value2, set){
  console.log(value, value2)
  console.log(set===s)
})