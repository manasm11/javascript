obj = { 
  namer: "Manas",
  age:'22'
}

var {namer, age} = obj;
console.log(namer, age)

function print(...args){
  console.log(...args);
}
print(age=22, name='hrllo')

function name_age(){
  return ['Manas', 22]
}

let [n, a] = name_age()
console.log(n);
console.log(a);

let [c, d] = [2, 4, 5, 6, 7, 8]
console.log(c, d);

console.log('3' + 5);