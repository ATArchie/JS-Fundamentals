//Logical "AND" - &&
console.log(true && true) //all values have to be TRUE for expression to be TRUE

// Logical "OR" - ||
console.log(true || false) //any value should be TRUE for the expression to be TRUE

var ageIsMoreThanEighteen = false
var isUSCitizen = true

var eligibilityForDriverLicense = ageIsMoreThanEighteen || isUSCitizen
console.log('This customer is eligible for DL: ' + eligibilityForDriverLicense)

//Logical "NOT" - !
console.log(!true)
console.log(6!==10)