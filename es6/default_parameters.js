function printDetails(name="Human", age=4000000000){
  console.log('name:', name, '\tage:', age)
}
printDetails('Manas', 22)
printDetails('Someone')
printDetails(undefined, 'BHOOOOOOT ZADA')

// MISC
console.log('')
bonusRatio = 0.1
function printSalary(salary, bonus=salary*bonusRatio){
  console.log('Total Salary:', salary+bonus)
}
printSalary(100, 20)
printSalary(100)

// This syntax leads to errors
// Can't use value defined towards right.
console.log('')
function printSalaryNew(salary=bonus*10, bonus=10){
  console.log('Total Salary:', salary+bonus)
}
printSalaryNew(200, 20)
printSalary()
