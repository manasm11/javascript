function printPersonDetails(name, age, weight, height){
  if(arguments.length != 4) throw ReferenceError('Details Incomplete')
  console.log("name:", arguments[0])
  console.log("age:", arguments[1])
  console.log("weight:", arguments[2])
  console.log("height:", arguments[3])
}
printPersonDetails("Manas", 22, 82, 140)
printPersonDetails("Human", 21, 70)